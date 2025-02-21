import mongoose from "mongoose";


const connectDb = async () => {
try {
    const connection =await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB Connected: ${connection.connection.host}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
}

export default connectDb;