import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function generatePortfolioContent(prompt: string) {
  try {
    const response = await ai.models.generateContent({
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
