'use server';
import { conntectToMongoDb } from "@/configs/mongodb.config";
import { Vendor } from "@/models/registry";
import { revalidatePath } from "next/cache";

const createVendor = async (data) => {
    try {
        await conntectToMongoDb();
        await Vendor.create(data);
        revalidatePath('/');
    } catch (error) {
        throw new Error(error);
    }
}

const getVendor = async (id) => {
    try {
        await conntectToMongoDb();
        let vendor = await Vendor.findById(id);
        return { vendor };
    } catch (_) {
        return {};
    }
}

const updateVendor = async (id, formData) => {

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
        }
    }

    try {
        await conntectToMongoDb();
        await Vendor.updateOne({ _id: id }, payload);
        revalidatePath('/');
    } catch (error) {
        throw new Error(error);
    }

}

const deleteVendor = async (id) => {
    try {
        await conntectToMongoDb();
        await Vendor.deleteOne({ _id: id });
        revalidatePath('/');
    } catch (error) {
        throw new Error(error);
    }
}

export { createVendor, getVendor, deleteVendor, updateVendor }