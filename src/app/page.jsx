import Link from "next/link";
import { conntectToMongoDb } from "@/configs/mongodb.config";
import { Vendor } from "@/models/registry";
import { AiFillEdit } from "react-icons/ai";
import { VscBracketError } from "react-icons/vsc";
import { Controller } from "@/components/Controller";
import { DeleteButton } from "@/components/DeleteButton";

const getVendors = async ({ page = 1, limit = 10, q = '' }) => {

  let searchCriteria = {};

  if (q) {
    searchCriteria = {
      $or: [
        { name: { $regex: new RegExp(q), $options: 'i' } },
        { 'address.city': { $regex: new RegExp(q, 'i') } },
        { 'bank.name': { $regex: new RegExp(q, 'i') } },
        { 'address.line1': { $regex: new RegExp(q, 'i') } },
        { 'address.line2': { $regex: new RegExp(q, 'i') } },
        { 'address.country': { $regex: new RegExp(q, 'i') } },
      ]
    }
  }

  try {
    await conntectToMongoDb();
    let vendors = await Vendor.find(searchCriteria).skip((page - 1) * limit).limit(limit);
    let count = await Vendor.countDocuments(searchCriteria);
    const pageEnd = Math.ceil(count / limit) || 1
    return { vendors: JSON.parse(JSON.stringify(vendors)), page, pageEnd }
  } catch (error) {
    return { vendors: [], page: 1, pageEnd: 1 }
  }
}


const Home = async ({ searchParams }) => {

  let { vendors, page, pageEnd } = await getVendors(searchParams);

  return (
    <main>
      <Controller
        params={searchParams}
        title={'Vendors'}
        page={Number(page)}
        pageEnd={Number(pageEnd)}
      />
      {vendors?.length ? (
        <table>
          <thead>
            <tr>
              <th> Vendor Name </th>
              <th> Bank Name </th>
              <th> Bank Account No. </th>
              <th> Country </th>
              <th> City </th>
              <th> Zipcode </th>
              <th> Edit </th>
              <th> Delete </th>
            </tr>
          </thead>

          <tbody>
            {vendors.map(({ _id, name, bank, address: { country, city, zipcode } }) => (
              <tr key={_id}>
                <td> {name} </td>
                <td> {bank.name} </td>
                <td> {bank.accountNumber} </td>
                <td> {country} </td>
                <td> {city} </td>
                <td> {zipcode} </td>
                <td> <Link href={`/vendors/update/${_id}`}> <AiFillEdit fontSize={20} cursor={'pointer'} /> </Link>  </td>
                <td> <DeleteButton id={_id} /> </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={'norecords'}>
          <VscBracketError fontSize={60} />
          <h2> No Records found! </h2>
        </div>
      )}

    </main>
  )
}

export default Home;
