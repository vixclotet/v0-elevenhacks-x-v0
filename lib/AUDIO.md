# Audio Architecture — Sticker Mule

## Where sounds are stored & accessed

### 1. Synthetic SFX — `lib/sounds.ts`
Generated at runtime using the **Web Audio API** — no static files needed.
- `createPeelSound()` — low-pitch "pop" on product card hover
- `createClickSound()` — short high-pitch click on nav/button interaction
- `createSuccessSound()` — ascending three-note chime on cart/customize actions

### 2. ElevenLabs TTS — `app/api/tts/route.ts`
Server-side POST endpoint that:
- Accepts `{ text, voiceId? }` JSON
- Calls **ElevenLabs** `textToSpeech.convert()` with the `eleven_turbo_v2_5` model
- Default voice: **Rachel** (`21m00Tcm4TlvDq8ikWAM`) — warm American English
- Returns `audio/mpeg` binary with `Cache-Control: public, max-age=3600`
- Requires `ELEVENLABS_API_KEY` environment variable

### 3. Client Audio Engine — `components/audio-provider.tsx`
React context wrapping the entire app:
- `useAudio()` hook — `{ voiceEnabled, toggleVoice, volume, setVolume, speak, speaking, stop }`
- `speak(text, voiceId?)` — fetches `/api/tts`, caches `ObjectURL`s in memory, plays via `<Audio>`
- Preferences persisted to `localStorage` under keys `sm_voice_enabled`, `sm_voice_volume`

### 4. Play Me Buttons — `components/play-me-button.tsx`
Reusable trigger component in three variants:
- `variant="pill"` — rounded chip with icon + label (default)
- `variant="icon"` — small round icon-only button
- `variant="inline"` — bare text link style

**Placed in:**
- `components/hero.tsx` — hero badge area + stats row
- `components/logo-carousel.tsx` — carousel heading
- `components/cta-section.tsx` — CTA headline area
- `components/best-sellers.tsx` — section header
- `app/customers/stories/page.tsx` — hero, each case study card, pull quote
- `app/customers/wall-of-love/page.tsx` — hero, each review card

### 5. Voice Controls — `components/navbar.tsx`
- `Volume2 / VolumeX` toggle button in the right nav
- Popover panel with volume slider, status indicator, Play Welcome / Stop buttons
- First-visit welcome announcement fires via `sessionStorage.getItem("sm_welcomed")`
