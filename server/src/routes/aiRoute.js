import express from "express";
import { enhanceExperience, generateSummaries } from "../controllers/aiController.js";
const router=express.Router()

router.post("/summary",generateSummaries)
router.post("/experience", enhanceExperience);
export default router;