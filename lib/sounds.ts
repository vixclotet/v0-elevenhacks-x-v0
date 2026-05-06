// Sound utility for UI interactions
// Uses the Web Audio API to generate sounds without needing audio files.
// Redesigned for a physical, tactile neubrutalist feel:
//   createPeelSound   → vinyl-crinkle: two-oscillator pitch-drop (tape peeling)
//   createClickSound  → stamp hit: white-noise burst (rubber stamp on paper)
//   createSuccessSound→ brassy 3-note stab: square wave, high energy
//   createHoverSound  → paper-flick: ultra-short broadband transient

type AudioCtxConstructor = typeof AudioContext

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null
  try {
    const Ctor: AudioCtxConstructor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: AudioCtxConstructor }).webkitAudioContext
    return new Ctor()
  } catch {
    return null
  }
}

/** Vinyl-crinkle peel: two oscillators, brief pitch-drop, feels like pulling tape */
export function createPeelSound() {
  if (typeof window === "undefined") return () => {}
  return () => {
    const ctx = getCtx()
    if (!ctx) return
    try {
      // Primary tone — sawtooth falling pitch
      const osc1 = ctx.createOscillator()
      const gain1 = ctx.createGain()
      osc1.connect(gain1)
      gain1.connect(ctx.destination)
      osc1.type = "sawtooth"
      osc1.frequency.setValueAtTime(500, ctx.currentTime)
      osc1.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.12)
      gain1.gain.setValueAtTime(0.18, ctx.currentTime)
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18)
      osc1.start(ctx.currentTime)
      osc1.stop(ctx.currentTime + 0.18)

      // Secondary texture — triangle wobble
      const osc2 = ctx.createOscillator()
      const gain2 = ctx.createGain()
      osc2.connect(gain2)
      gain2.connect(ctx.destination)
      osc2.type = "triangle"
      osc2.frequency.setValueAtTime(800, ctx.currentTime + 0.01)
      osc2.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1)
      gain2.gain.setValueAtTime(0.08, ctx.currentTime + 0.01)
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)
      osc2.start(ctx.currentTime + 0.01)
      osc2.stop(ctx.currentTime + 0.12)
    } catch { /* silently fail */ }
  }
}

/** Rubber-stamp hit: shaped white-noise burst — sounds like stamping paper */
export function createClickSound() {
  if (typeof window === "undefined") return () => {}
  return () => {
    const ctx = getCtx()
    if (!ctx) return
    try {
      const bufferSize = ctx.sampleRate * 0.04 // 40ms of noise
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) // fade-out envelope
      }

      const source = ctx.createBufferSource()
      source.buffer = buffer

      // Band-pass filter to make it feel like a physical impact (not tinny)
      const filter = ctx.createBiquadFilter()
      filter.type = "bandpass"
      filter.frequency.value = 1200
      filter.Q.value = 0.8

      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.55, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04)

      source.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      source.start(ctx.currentTime)
    } catch { /* silently fail */ }
  }
}

/** Brassy 3-note stab: square waves, 200ms each — high energy celebration */
export function createSuccessSound() {
  if (typeof window === "undefined") return () => {}
  return () => {
    const ctx = getCtx()
    if (!ctx) return
    try {
      const notes = [
        { freq: 523, time: 0 },      // C5
        { freq: 659, time: 0.1 },    // E5
        { freq: 784, time: 0.2 },    // G5
      ]
      notes.forEach(({ freq, time }) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        // Slight soft-clip for warmth
        const shaper = ctx.createWaveShaper()
        const curve = new Float32Array(256)
        for (let i = 0; i < 256; i++) {
          const x = (i * 2) / 256 - 1
          curve[i] = (Math.PI + 100) * x / (Math.PI + 100 * Math.abs(x))
        }
        shaper.curve = curve

        osc.connect(shaper)
        shaper.connect(gain)
        gain.connect(ctx.destination)

        osc.type = "square"
        osc.frequency.setValueAtTime(freq, ctx.currentTime + time)

        gain.gain.setValueAtTime(0, ctx.currentTime + time)
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + time + 0.01)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + 0.22)

        osc.start(ctx.currentTime + time)
        osc.stop(ctx.currentTime + time + 0.25)
      })
    } catch { /* silently fail */ }
  }
}

/** Paper-flick: ultra-short (15ms) broadband transient for hover states */
export function createHoverSound() {
  if (typeof window === "undefined") return () => {}
  return () => {
    const ctx = getCtx()
    if (!ctx) return
    try {
      const bufferSize = Math.floor(ctx.sampleRate * 0.015) // 15ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
      }

      const source = ctx.createBufferSource()
      source.buffer = buffer

      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.12, ctx.currentTime)

      source.connect(gain)
      gain.connect(ctx.destination)
      source.start(ctx.currentTime)
    } catch { /* silently fail */ }
  }
}
