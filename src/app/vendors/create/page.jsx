'use client';
import classes from '@/styles/Vendor.module.css';
import { useSession } from "next-auth/react";
import { toast } from 'react-hot-toast';
import { createVendor } from '@/server_actions/vendor.actions';

const page = () => {

    const { data } = useSession();

    const onCreate = async (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const payload = {

            name: formData.get('name'),

            bank: {
                name: formData.get('bankName'),
                accountNumber: Number(formData.get('accountNo'))
            },

            address: {
                line1: formData.get('line1'),
                line2: formData.get('line2'),
                city: formData.get('city'),
                country: formData.get('country'),
                zipcode: Number(formData.get('zipcode'))
            },

            createdBy: data?.user?.email
        }

        try {
            await createVendor(payload);
            event.target.reset();
            toast.success('Created');
        } catch (error) {
            toast.error('Failed to create');
        }
    }

    return (
        <main className={classes.create}>

            <h2> Create vendor </h2>

            <form onSubmit={onCreate}>
                <div>
                    <label> Vendor Name </label>
                    <input type="text" name="name" required />
                </div>

                <div>
                    <label> Bank Name </label>
                    <input type="text" name="bankName" required />
                </div>

                <div>
                    <label> Bank Account No. </label>
                    <input type="number" name="accountNo" required />
                </div>

                <div>
                    <label> Addess Line 1 </label>
                    <input type="text" name="line1" required />
                </div>

                <div>
                    <label> Addess Line 2 </label>
                    <input type="text" name="line2" required />
                </div>

                <div>
                    <label> City </label>
                    <input type="text" name="city" required />
                </div>

                <div>
                    <label> Country </label>
                    <input type="text" name="country" required />
                </div>

                <div>
                    <label> Zincode </label>
                    <input type="number" name="zipcode" required />
                </div>

                <button type='submit' > Create </button>
            </form>
        </main>
    )
}

export default page
