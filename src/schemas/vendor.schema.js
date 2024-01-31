import { Schema } from 'mongoose';

const vendorSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    bank: new Schema({

        name: {
            type: String,
            required: true
        },

        accountNumber: {
            type: Number,
            required: true
        }
    }),

    address: new Schema({
        line1: {
            type: String,
            required: true
        },

        line2: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        },

        zipcode: {
            type: Number,
            required: true
        }
    }),

    createdBy: {
        type: String,
        required: true
    }


}, { timestamps: true })

export { vendorSchema }