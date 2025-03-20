import express from "express";
import { login } from "../controller/userValid.js";

const router = express.Router()

router.post("/" , login )

export default router