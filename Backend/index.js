import express, { json } from "express";
import { config }  from "dotenv";
import mongoose from "mongoose";
// import {listData} from "./Routes/bookDataFind.js"
import cors from "cors"
import router from "./Routes/index.js"





(async (req,res) => {
    mongoose.connect("mongodb://localhost:27017/bookStore")

    console.log("connected to db");
    

 
}) ()




const app = express()

app.use(express.json())

app.use(cors())

config()



// router use from router
app.use("/", router) 


const Port = process.env.Port

app.listen(Port ,"0.0.0.0", () => {

    console.log(`server running on port ${Port}`);
})



