
import express from "express";

import {
  createResume,
  getUserResumes,
  saveSection,
  getResumeById,
  deleteResume,
} from "../controllers/ResumeControllers.js";

const router = express.Router();

router.post("/create", createResume);

router.get("/", getUserResumes);

router.put("/:id/section", saveSection);
router.get("/:id", getResumeById);
router.delete("/delete/:id", deleteResume)
export default router;


