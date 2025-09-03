import mongoose from "mongoose";
import {DB_URI, NODE_ENV} from "../config/env.js";

if(!DB_URI) {
    throw new Error('DB_URI is not defined in environment variables');
}

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`connected to DataBase in ${NODE_ENV} mode`);
    }catch (error) {
        console.error('Error connecting to DataBase', error);
        process.exit(1);
    }
}

export default connectDB;
