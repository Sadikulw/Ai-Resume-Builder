import { GoogleGenAI } from "@google/genai";

const getGeminiApiKey = () =>
  process.env.GEMINI_API_KEY ||
  process.env.GOOGLE_API_KEY ||
  process.env.GOOGLE_GEN_AI_API;

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

export const generateSummaries = async (req, res) => {
  try {
    const { text } = req.body;
    const ai = createAiClient();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Generate 3 ATS-friendly professional resume summaries.

Rules:
- 2-3 lines
- Professional tone
- Return ONLY JSON array

Format:
[
  {
    "id": 1,
    "summary": ""
  }
]

Text:
${text}
      `,
    });

    // Clean markdown
    const cleanText = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Parse JSON
    const summaries = JSON.parse(cleanText);

    res.json({
      summaries,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};
export const enhanceExperience = async (req, res) => {
  try {
    const { text, position, company } = req.body;
    const ai = createAiClient();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are a resume expert.

Create 3 variations of this experience.

Position: ${position}
Company: ${company}

Text:
${text}

RULES:
- Return ONLY valid JSON array
- No markdown
- No explanation
- No \`\`\`

FORMAT:
[
  {
    "id": 1,
    "text": ""
  },
  {
    "id": 2,
    "text": ""
  },
  {
    "id": 3,
    "text": ""
  }
]
      `,
    });

    let cleaned = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let result;

    try {
      result = JSON.parse(cleaned);
    } catch (err) {
      return res.status(500).json({
        error: "Invalid AI JSON",
        raw: cleaned,
      });
    }

    res.json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};