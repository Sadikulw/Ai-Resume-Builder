import express from "express";
import mongoose from "mongoose";
import { getAuth } from "@clerk/express";
import { saveUser } from "../controllers/userController.js";
import { requireAuth } from "../middleware/userAuth.js";
const router = express.Router();


router.post("/save-user", requireAuth, saveUser);
export default router;