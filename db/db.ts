import mongoose from "mongoose";

export const dbConnection = async () => {
    const mongoUri = String(process.env.MONGO_URI);

    try {
        const conn = await mongoose.connect(mongoUri);
        console.log(`db connected ${conn.connection.host}`);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(`db error occured ${err.message}`)
        }
        else {
            console.log(`unknown error ${err}`);
        }
    }
}