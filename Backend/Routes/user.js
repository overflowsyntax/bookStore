import express from "express";
import { signup } from "../controller/userValid.js";

const router = express.Router()

router.post("/" , signup )

export default router