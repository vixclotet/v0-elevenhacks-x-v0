# Sticker Mule — Reimagined with v0 + ElevenLabs

> A complete visual redesign of the Sticker Mule product website, built with [v0](https://v0.app) and powered by [ElevenLabs](https://elevenlabs.io) TTS. Same product. Completely different aesthetic. Every product you can touch has a voice.

**Hackathon:** ElevenHacks x v0 &nbsp;|

---

## What Was Built

This project clones [stickermule.com](https://www.stickermule.com) and reimagines it in a **Neubrutalist** visual aesthetic — bold 2px black borders, hard 4px offset box-shadows, dot-grid backgrounds, flat corners, and a newsprint-yellow ticker tape. The content and product catalogue are identical to the live site; only the design language is reinvented.

ElevenLabs Text-to-Speech is woven into the experience at every level — not as a novelty button, but as a first-class navigation layer. Every section, every product card, every customer review can be read aloud on demand.

---

## Screenshots

### Product Catalogue Grid

All seven Sticker Mule product families — **Stickers, Labels, Magnets, Buttons & Pins, Packaging, Apparel, and Acrylics** — are presented in an editorial bento grid with hard black borders and offset shadows. Each card plays a hover sound and reads its product description aloud via ElevenLabs when voice is enabled.

### ElevenLabs Audio Features

"Play Me" pill buttons appear throughout the page — next to the hero headline, in each product card, on every review, and on case study cards. A persistent audio control panel in the navbar lets users toggle voice on/off and adjust volume. When voice is enabled, hovering any card triggers an ElevenLabs narration of that product or review.

### Ticker Banner + Logo Carousel

A double scrolling ticker tape separates the hero from the logo carousel. The black strip lists all seven product categories; the orange strip lists key value propositions. Below it, 16+ brand logos (Google, Netflix, Microsoft, SpaceX, Twitch, Y Combinator, HP, Vercel, and more) scroll across three independent tracks at different speeds.

---

![Hero](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.33.15%E2%80%AFPM-dVXrpuDALYSQTZEh7M3rSx0TcM9Jj5.png)

![Logo carousel and product grid](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.48.55%E2%80%AFPM-pgcn4hPrvoh9GJnnH3qBvKtNijmf6T.png)

![Why section](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.49.03%E2%80%AFPM-gaRDPjGY8zQ2Gw1DBuxGavJssPgXER.png)

![Testimonials](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.49.11%E2%80%AFPM-Dfv361mYFSxamI2lTPUIqFjS0RDRWr.png)

---

## Tech

- [v0](https://v0.app) — scaffolded and iterated every component
- [ElevenLabs](https://elevenlabs.io) — TTS streamed via `/api/tts` with LRU blob caching
- [Next.js](https://nextjs.org) — App Router
- [Framer Motion](https://www.framer.com/motion/) — animations
- Web Audio API — four in-browser SFX, no audio files required

