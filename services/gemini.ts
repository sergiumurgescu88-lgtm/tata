import { GoogleGenAI, Modality } from "@google/genai";

const getApiKey = () => {
  // Safe access to process.env to prevent crashing if process is undefined
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    return process.env.API_KEY;
  }
  // Fallback or empty string (client will throw auth error, but app won't crash)
  return (window as any).process?.env?.API_KEY || '';
};

const getAI = () => {
  // Configured to use the environment variable as required by platform rules
  return new GoogleGenAI({ apiKey: getApiKey() });
};

export const getTechnicalAdvice = async (
  history: { role: string; text: string }[],
  userMessage: string
): Promise<string> => {
  try {
    const ai = getAI();
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: `Ești "Senior Energy Consultant & Marketing Strategist" pentru SMART Renowable Energy SRL.
        Ajută utilizatorii să genereze conținut tehnic și de marketing bankabil.`,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "Eroare la generarea răspunsului.";
  } catch (error) {
    console.error(error);
    return "Eroare conexiune API. Verificați cheia API.";
  }
};

export const generateMarketingCampaign = async (
  brand: any,
  productInfo: string
): Promise<string> => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Generează un set complet de materiale de marketing pentru: ${productInfo}.
      Brand Context: ${JSON.stringify(brand)}.
      
      INCLUDE:
      1. Meta Ads (3 unghiuri)
      2. Google Search Ads (H1-H15)
      3. Landing Page Copy (Hero, Benefits, FAQ)
      4. Email Sequence (3 mailuri)
      5. Social Posts (LinkedIn focuses)
      
      Formatează totul în Markdown clar cu titluri mari.`,
      config: {
        temperature: 0.8,
        thinkingConfig: { thinkingBudget: 2000 }
      }
    });
    return response.text || "";
  } catch (e) {
    console.error(e);
    return "Nu s-a putut genera campania. Verificați cota API.";
  }
};

export const generateSpeech = async (text: string): Promise<ArrayBuffer | null> => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, 
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
    if (base64Audio) {
      const binaryString = atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    }
    return null;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};