import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace the API key here
const apiKey = "AIzaSyBc-rj0c-GMrt3IP76q_5q0MicHbkK41Oo";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const run = async (prompt) => {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text); // Accessing `text` directly
};

export default run;
