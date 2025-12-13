import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    if (!process.env.API_KEY) {
      throw new Error("API Key not found");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const streamChatResponse = async (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<AsyncIterable<GenerateContentResponse>> => {
  try {
    const client = getAIClient();
    
    // Convert history to format expected by Chat (simple list of parts)
    // Note: This simple implementation creates a fresh chat for simplicity in this demo context,
    // or you could maintain a persistent chat object in the component. 
    // For a stateless service call, we'll start a chat with history.
    
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessageStream({ message: userMessage });
    return result;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
