import mongoose from "mongoose";

const conntectToMongoDb = async () => {

    if (mongoose.connection.readyState) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        throw new Error(error)
    }
}

export { conntectToMongoDb }