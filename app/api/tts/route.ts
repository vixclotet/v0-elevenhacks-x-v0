import { NextRequest, NextResponse } from "next/server"
import { ElevenLabsClient } from "elevenlabs"

// Rachel — warm, friendly American female voice, great for brand announcements
const DEFAULT_VOICE_ID = "21m00Tcm4TlvDq8ikWAM"

// Model: eleven_turbo_v2_5 — low latency, high quality
const MODEL_ID = "eleven_turbo_v2_5"

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "ElevenLabs API key not configured" }, { status: 500 })
    }

    const body = await req.json()
    const { text, voiceId } = body as { text: string; voiceId?: string }

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json({ error: "text is required" }, { status: 400 })
    }

    // Clamp text length to avoid excessive API usage
    const safeText = text.trim().slice(0, 500)

    const client = new ElevenLabsClient({ apiKey })

    const audioStream = await client.textToSpeech.convert(voiceId ?? DEFAULT_VOICE_ID, {
      text: safeText,
      model_id: MODEL_ID,
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.3,
        use_speaker_boost: true,
      },
    })

    // Collect the readable stream into a buffer
    const chunks: Uint8Array[] = []
    for await (const chunk of audioStream) {
      chunks.push(chunk)
    }
    const buffer = Buffer.concat(chunks)

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.byteLength.toString(),
        // Cache TTS responses for 1 hour to avoid duplicate API calls
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    })
  } catch (err) {
    console.error("[TTS API]", err)
    return NextResponse.json({ error: "TTS generation failed" }, { status: 500 })
  }
}
