import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB=async ()=>{

    try{
        const connectDBInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB CONNECTED!! ${connectDBInstance.connection.host}`)

    }
    catch(error)
    {
        console.log("Mongodb connection error:",error);
    }

}

export default connectDB;