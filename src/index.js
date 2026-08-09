import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config({
    path:"./.env"
})
connectDB();















/*import mogoose from "mongoose";
import express from 'express';
import { DB_NAME } from "./constants.js";

const app=express();
(
    async()=>{
        try{
           await mogoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
           app.on("error",(error)=>{
            console.log(error);
            throw error;
           })

           app.listen(process.env.PORT,()=>{
            console.log(`App listening on Port: ${process.env.PORT}`);
           })
        }
        catch(error)
        {
            console.log(error);
            throw error;
        }
})()*/