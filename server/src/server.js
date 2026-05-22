import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import userRoute from "./routes/userRoute.js";
import { GoogleGenAI } from "@google/genai";
import aiRoute from "./routes/aiRoute.js";
import resumeRoute from "./routes/resumeRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

const getGeminiApiKey = () =>
  process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GEN_AI_API;

const createAiClient = () => {
  const geminiApiKey = getGeminiApiKey();
  if (!geminiApiKey) {
    throw new Error(
      "Missing Gemini API key. Set GEMINI_API_KEY or GOOGLE_API_KEY or GOOGLE_GEN_AI_API in .env",
    );
  }
  return new GoogleGenAI({
    apiKey: geminiApiKey,
  });
};
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(
  clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
  }),
);

app.get("/", async (req, res) => {
  try {
    const ai = createAiClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "How does AI work?",
    });

    console.log(response.text);

    res.send(response.text);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.use("/api/user", userRoute);
app.use("/api/ai", aiRoute);
app.use("/api/resume", resumeRoute)

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error);
  }
};

startServer();
