import book from "./book.js"
import express, { json } from "express";
import user from "./user.js";
import login from "./login.js"


const router = express.Router()



router.use("/book" , book)
router.use("/user/signup",user )
router.use("/user/login" , login)




export default router