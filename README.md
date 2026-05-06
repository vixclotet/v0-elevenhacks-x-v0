# Sticker Mule — Reimagined with v0 + ElevenLabs

A clone of [stickermule.com](https://www.stickermule.com) built with [v0](https://v0.app) and [ElevenLabs](https://elevenlabs.io) for the ElevenHacks hackathon. Same product, completely reinvented design — with voice built in at every layer.

---

![Hero](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.33.15%E2%80%AFPM-dVXrpuDALYSQTZEh7M3rSx0TcM9Jj5.png)

![Logo carousel and trusted brands](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.48.55%E2%80%AFPM-pgcn4hPrvoh9GJnnH3qBvKtNijmf6T.png)

![Why 350k businesses choose us](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.49.03%E2%80%AFPM-gaRDPjGY8zQ2Gw1DBuxGavJssPgXER.png)

![Creators earning with Sticker Mule](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.49.11%E2%80%AFPM-Dfv361mYFSxamI2lTPUIqFjS0RDRWr.png)

---

## Tech

- [v0](https://v0.app) — scaffolded and iterated every component
- [ElevenLabs](https://elevenlabs.io) — TTS streamed via `/api/tts` with LRU blob caching
- [Next.js](https://nextjs.org) — App Router
- [Framer Motion](https://www.framer.com/motion/) — animations
- Web Audio API — four in-browser SFX, no audio files required

---

## Getting started

```bash
pnpm install
pnpm dev
```

Add your ElevenLabs API key to `.env.local`:

```
ELEVENLABS_API_KEY=your_key_here
```
