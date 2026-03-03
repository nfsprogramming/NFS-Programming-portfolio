import { GoogleGenAI } from "@google/genai";

const apiKey =
  import.meta.env.VITE_GEMINI_API_KEY ||
  import.meta.env.GEMINI_API_KEY ||
  "";

let ai: GoogleGenAI | null = null;

function getClient() {
  if (!apiKey) {
    return null;
  }

  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }

  return ai;
}

export async function generatePortfolioContent(prompt: string) {
  const client = getClient();
  if (!client) {
    return "Gemini API key is missing. Add it in .env.local and restart the dev server.";
  }

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are a professional copywriter specializing in personal branding and portfolios. Write compelling, concise, and modern copy that sounds human and authentic. Use a tone that is professional yet approachable.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to generate content. Please try again.";
  }
}
