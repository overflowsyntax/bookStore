import express from "express";
import { listData } from "../controller/bookFind.js";
const router = express.Router()


router.get("/" ,async (req,res) => {

    const data = await listData()

    console.log("Home")

    res.json(data)
}) 

export default router