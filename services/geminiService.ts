import { GoogleGenAI, Type } from "@google/genai";
import { GraphData, InfluencerResponse } from "../types";

export const expandNetwork = async (currentData: GraphData): Promise<InfluencerResponse> => {
  if (!process.env.API_KEY) {
    console.warn("No API KEY found");
    return { newNodes: [], newLinks: [] };
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Create a list of existing names to avoid duplicates
  const existingNames = currentData.nodes.map(n => n.name).join(", ");

  const prompt = `
    I have a social graph of AI influencers and companies on X (Twitter).
    The current list is: ${existingNames}.
    
    Please identify 5 to 8 NEW, highly relevant, and influential people or AI labs that should be connected to this network.
    Also define how they connect to the EXISTING list or each other.
    
    Focus on:
    1. Top researchers
    2. Founders of major AI labs
    3. Key AI engineering influencers

    For each new person/company, provide:
    - Their Role (e.g. CEO, Researcher)
    - Their X (Twitter) handle (without @)
    - Their Associated Company/Institution
    - Their current X (Twitter) profile bio text (approximate if exact is unknown)
    - 3-4 short keywords (tags) describing their specific AI focus (e.g. "LLMs", "Robotics", "Safety", "Investing")
    - An estimated "joinedDate" year for their Twitter account (e.g. "2015").
    
    Return a raw JSON object with 'newNodes' and 'newLinks'.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            newNodes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: "Name of person or company" },
                  group: { type: Type.STRING, description: "Must be one of: 'person', 'company', 'researcher'" },
                  role: { type: Type.STRING, description: "Job title or short description" },
                  handle: { type: Type.STRING, description: "X username without @" },
                  associated: { type: Type.STRING, description: "Main associated company or institution" },
                  bio: { type: Type.STRING, description: "The bio text from their X/Twitter profile" },
                  bioTags: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3-4 keywords describing their AI focus" },
                  joinedDate: { type: Type.STRING, description: "Year they joined X/Twitter, e.g. '2012'" }
                },
                required: ["name", "group", "role", "handle", "associated", "bio", "bioTags", "joinedDate"]
              }
            },
            newLinks: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  source: { type: Type.STRING, description: "Name of the source node" },
                  target: { type: Type.STRING, description: "Name of the target node" }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      // Defensive parsing: strip markdown code blocks if present
      const cleanJson = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      
      // Ensure arrays exist
      return {
        newNodes: Array.isArray(parsed.newNodes) ? parsed.newNodes : [],
        newLinks: Array.isArray(parsed.newLinks) ? parsed.newLinks : []
      };
    }
    return { newNodes: [], newLinks: [] };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return { newNodes: [], newLinks: [] };
  }
};