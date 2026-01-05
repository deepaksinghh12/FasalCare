import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("image") as File;

        if (!file) {
            return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
        
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64Image = buffer.toString("base64");

        // Fallback to 'gemini-pro-vision' (for images) as 'gemini-1.5-flash' returned 404
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

        const prompt = `Analyze this plant image for diseases. 
    Return ONLY a valid JSON object (no markdown, no backticks) with this structure:
    {
      "disease": "Name of disease or 'Healthy'",
      "description": "Brief description of the problem",
      "treatment": "Organic and Chemical control measures",
      "prevention": "Tips to prevent this in future"
    }
    `;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: base64Image,
                    mimeType: file.type,
                },
            },
        ]);
        const response = await result.response;
        const text = response.text();


        try {
            const jsonResponse = JSON.parse(cleanedText);
            return NextResponse.json(jsonResponse);
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError, "Raw Text:", text);
            return NextResponse.json(
                { error: "Failed to parse AI response" },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error("Diagnosis Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
