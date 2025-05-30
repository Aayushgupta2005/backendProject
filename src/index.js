// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME} from "./constants"
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Sever is running at port : ${process.env.PORT || 8000}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!" , err);
})
















/*
import express from "express"
const app = express()
// function connectDB() {}
// connectDB()

//IFFE
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port : ${process.env.PORT}`);
        }) 
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()



*/