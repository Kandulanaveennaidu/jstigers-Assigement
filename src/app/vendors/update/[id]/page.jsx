import classes from '@/styles/Vendor.module.css';
import { conntectToMongoDb } from "@/configs/mongodb.config";
import { Vendor } from "@/models/registry";
import { updateVendor } from '@/server_actions/vendor.actions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { VendorForm } from '@/components/VendorForm';

const getVendor = async (id) => {
    try {
        await conntectToMongoDb();
        let vendor = await Vendor.findOne({ _id: id });
        return { vendor: JSON.parse(JSON.stringify(vendor)) };
    } catch (_) {
        return {};
    }
}

const UpdateVendor = async ({ params: { id } }) => {

    let { vendor } = await getVendor(id);

    const onUpdate = async (formData) => {
        'use server'
        await updateVendor(id, formData);
        revalidatePath(`/vendors/update/${id}`);
        redirect('/');
    }

    return vendor && (
        <main>
            <VendorForm vendor={vendor} id={id} />
        </main>
    )
}

export default UpdateVendor;
