'use client';
import classes from '@/styles/Vendor.module.css';
import { updateVendor } from '@/server_actions/vendor.actions';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const VendorForm = ({ vendor, id }) => {

    const [isLoading, setLoading] = useState(false);

    const onUpdate = async (formData) => {

        setLoading(true);

        try {
            await updateVendor(id, formData);
            toast.success('Updated');
        } catch (error) {
            toast.error('Failed to update');
        }

        setLoading(false);
    }

    return (
        <div className={classes.create}>
            <h2> Update Vendor </h2>

            <form action={onUpdate}>
                <div>
                    <label> Vendor Name </label>
                    <input type="text" name="name" required defaultValue={vendor.name} />
                </div>

                <div>
                    <label> Bank Name </label>
                    <input type="text" name="bankName" required defaultValue={vendor.bank.name} />
                </div>

                <div>
                    <label> Bank Account No. </label>
                    <input type="number" name="accountNo" required defaultValue={vendor.bank.accountNumber} />
                </div>

                <div>
                    <label> Addess Line 1 </label>
                    <input type="text" name="line1" required defaultValue={vendor.address.line1} />
                </div>

                <div>
                    <label> Addess Line 2 </label>
                    <input type="text" name="line2" required defaultValue={vendor.address.line2} />
                </div>

                <div>
                    <label> City </label>
                    <input type="text" name="city" required defaultValue={vendor.address.city} />
                </div>

                <div>
                    <label> Country </label>
                    <input type="text" name="country" required defaultValue={vendor.address.country} />
                </div>

                <div>
                    <label> Zincode </label>
                    <input type="number" name="zipcode" required defaultValue={vendor.address.zipcode} />
                </div>

                <button type='submit' disabled={isLoading}> {isLoading ? 'Updating...' : 'Update'} </button>
            </form>
        </div>
    )
}

export { VendorForm }
