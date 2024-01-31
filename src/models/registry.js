/*
* Register mongoose model
*/

import mongoose from "mongoose";
import { vendorSchema } from "@/schemas/vendor.schema";

const Vendor = mongoose.models.vendors || mongoose.model('vendors', vendorSchema);

export { Vendor }