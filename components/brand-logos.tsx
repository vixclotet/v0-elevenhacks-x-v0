// Brand logo registry.
// Inline-SVG brands: always render correctly, zero external deps.
// External-image brands: hosted on Vercel Blob, served via <img> with object-contain.

import type { SVGProps } from "react"

type LogoProps = SVGProps<SVGSVGElement> & { className?: string }

// ─── Inline SVG logos ────────────────────────────────────────────────────────

export function LululemonLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="lululemon" role="img" {...props}>
      <path d="M18 8C13.03 8 9 12.03 9 17C9 19.39 9.96 21.56 11.52 23.15C10.58 24.02 10 25.26 10 26.63C10 29.29 12.15 31.44 14.81 31.44C16.18 31.44 17.43 30.86 18.3 29.92C19.88 31.47 22.05 32.44 24.44 32.44C29.41 32.44 33.44 28.41 33.44 23.44C33.44 18.47 29.41 14.44 24.44 14.44C22.06 14.44 19.89 15.4 18.3 16.96C17.43 16.01 16.17 15.44 14.81 15.44C14.16 15.44 13.54 15.57 12.97 15.81C13.88 11.37 17.56 8 22 8H18Z" fill="#BE1522"/>
      <path d="M14.81 17.44C13.25 17.44 12 18.69 12 20.25C12 21.81 13.25 23.06 14.81 23.06C15.59 23.06 16.29 22.74 16.8 22.23C16.29 21.08 16 19.79 16 18.44C16 18.07 16.03 17.75 16.06 17.52C15.7 17.47 15.27 17.44 14.81 17.44Z" fill="#BE1522"/>
      <path d="M24.44 16.44C20.58 16.44 17.44 19.58 17.44 23.44C17.44 27.3 20.58 30.44 24.44 30.44C28.3 30.44 31.44 27.3 31.44 23.44C31.44 19.58 28.3 16.44 24.44 16.44Z" fill="#BE1522"/>
      <text x="42" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#1A1A1A" letterSpacing="1">lululemon</text>
    </svg>
  )
}

export function NikeLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Nike" role="img" {...props}>
      <path d="M10 60L130 18C145 13 158 16 152 30C148 40 125 47 115 50L10 60Z" fill="#111111"/>
    </svg>
  )
}

export function GoogleLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Google" role="img" {...props}>
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
      <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
    </svg>
  )
}

export function DropboxLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Dropbox" role="img" {...props}>
      <path d="M12 8L24 16L12 24L0 16L12 8Z" fill="#0061FF"/>
      <path d="M36 8L48 16L36 24L24 16L36 8Z" fill="#0061FF"/>
      <path d="M0 16L12 24L24 16L12 8L0 16Z" fill="#0061FF"/>
      <path d="M24 16L36 24L48 16L36 8L24 16Z" fill="#0061FF"/>
      <path d="M12 26L24 18L36 26L24 34L12 26Z" fill="#0061FF"/>
      <text x="58" y="31" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#1A1A1A">Dropbox</text>
    </svg>
  )
}

export function NetflixLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 111 30" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Netflix" role="img" {...props}>
      <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.937 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 8 .405v4.657zM64.25 10.657V0h-4.688v26.25c4.25.094 8.313.405 12.469.812v-4.5c-2.594-.281-5.188-.53-7.781-.625v-7.375h6.812v-4.75h-6.812V.031H64.25v10.626zM44.125 0v4.5h5.875V26.25h4.625V4.5H60.5V0H44.125zM28.031 0L19.687 16.813V0h-4.843v26.875c1.625 0 3.281.063 4.874.094L28.875 8.5v18.906c1.625.063 3.25.188 4.875.282V0h-5.719zM0 0v26.437c1.625-.063 3.219-.125 4.875-.125V15.22L9.625 26.25c1.75 0 3.469-.063 5.219-.063V0h-4.75v10.813L5 0H0z" fill="#E50914"/>
    </svg>
  )
}

export function FacebookLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Facebook" role="img" {...props}>
      <circle cx="20" cy="20" r="18" fill="#1877F2"/>
      <path d="M26.5 20H23V30H18V20H15.5V15.5H18V13.5C18 10.42 19.89 8.5 22.69 8.5H26.5V13H24.5C23.67 13 23 13.22 23 14.5V15.5H26.5L26 20H26.5Z" fill="white"/>
      <text x="46" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#1877F2">Facebook</text>
    </svg>
  )
}

export function MicrosoftLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 200 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Microsoft" role="img" {...props}>
      <rect x="2" y="2" width="18" height="18" fill="#F25022"/>
      <rect x="22" y="2" width="18" height="18" fill="#7FBA00"/>
      <rect x="2" y="22" width="18" height="18" fill="#00A4EF"/>
      <rect x="22" y="22" width="18" height="18" fill="#FFB900"/>
      <text x="52" y="30" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="600" fontSize="15" fill="#737373">Microsoft</text>
    </svg>
  )
}

export function GitHubLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="GitHub" role="img" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2C11.51 2 3 10.51 3 21C3 29.67 8.44 37.01 16.19 39.62C17.19 39.8 17.55 39.19 17.55 38.67C17.55 38.2 17.53 36.83 17.53 35.37C12 36.5 10.74 33.08 10.44 32.31C9.71 30.5 8.47 29.8 7.5 29.18C6.72 28.7 6.22 27.76 7.47 27.74C8.64 27.72 9.47 29.32 9.78 30.03C11.13 32.43 13.39 31.73 17.63 31.35C17.63 29.97 17.65 28.32 17.65 27.52C13.45 26.52 9.88 23.33 9.88 17.92C9.88 16.24 10.5 14.84 11.5 13.77C11.33 13.35 10.84 11.64 11.65 9.39C11.65 9.39 12.95 8.95 16.25 11.11C17.57 10.71 19.01 10.5 20.44 10.5C21.87 10.5 23.31 10.71 24.63 11.11C27.93 8.93 29.23 9.39 29.23 9.39C30.04 11.64 29.55 13.35 29.38 13.77C30.38 14.84 31 16.22 31 17.92C31 23.35 27.41 26.54 23.21 27.52C23.33 28.05 23.55 29.8 23.55 32.26L23.55 38.67C23.55 39.19 23.91 39.81 24.91 39.62C32.64 37.01 38 29.66 38 21C38 10.51 29.49 2 22 2Z" fill="#24292E"/>
      <text x="50" y="29" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#24292E">GitHub</text>
    </svg>
  )
}

export function SpotifyLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 168 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Spotify" role="img" {...props}>
      <circle cx="25" cy="25" r="22" fill="#1DB954"/>
      <path d="M35.5 32.5C33 31 28.8 30 24 30C20.5 30 17 30.7 14 31.8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M37 26.5C34 24.7 29 23.5 24 23.5C19.5 23.5 15.5 24.4 12 26" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M38.5 20C35 17.8 29 16 24 16C18.5 16 13.5 17.2 9.5 19.3" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <text x="56" y="32" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#1DB954">Spotify</text>
    </svg>
  )
}

export function ShopifyLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Shopify" role="img" {...props}>
      <path d="M30 10L35 8L38 16V40H18V16L22 8L30 10Z" fill="#96BF48"/>
      <path d="M27 10C27 10 24 16 24 20H32C32 16 29 10 27 10Z" fill="#5E8E3E"/>
      <path d="M27 22H28.5L30 26L27 36L24 26L25.5 22H27Z" fill="#5E8E3E"/>
      <text x="48" y="32" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#96BF48">Shopify</text>
    </svg>
  )
}

export function SlackLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 155 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Slack" role="img" {...props}>
      <rect x="8" y="20" width="10" height="7" rx="3" fill="#36C5F0"/>
      <rect x="20" y="20" width="7" height="10" rx="3" fill="#36C5F0"/>
      <rect x="20" y="8" width="7" height="10" rx="3" fill="#2EB67D"/>
      <rect x="8" y="8" width="10" height="7" rx="3" fill="#ECB22E"/>
      <rect x="29" y="20" width="7" height="10" rx="3" fill="#E01E5A"/>
      <rect x="29" y="32" width="10" height="7" rx="3" fill="#E01E5A"/>
      <text x="48" y="32" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#3D1D1C">Slack</text>
    </svg>
  )
}

export function AirbnbLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Airbnb" role="img" {...props}>
      <path d="M25 8C22 8 20 10.5 20 13C20 16.5 23 19.5 25 21C27 19.5 30 16.5 30 13C30 10.5 28 8 25 8Z" fill="#FF5A5F"/>
      <path d="M14 30C12.5 27 12 25 12 23C12 19 15 16 19 16C20.5 16 22 16.5 23 17.5C21 19.5 19 22 17.5 25L14 30Z" fill="#FF5A5F"/>
      <path d="M36 30C37.5 27 38 25 38 23C38 19 35 16 31 16C29.5 16 28 16.5 27 17.5C29 19.5 31 22 32.5 25L36 30Z" fill="#FF5A5F"/>
      <path d="M25 23C22 26 15 30 13 34C11.5 37 13 41 16 41C18.5 41 20 40 22 38L25 35L28 38C30 40 31.5 41 34 41C37 41 38.5 37 37 34C35 30 28 26 25 23Z" fill="#FF5A5F"/>
      <text x="48" y="32" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="16" fill="#FF5A5F">Airbnb</text>
    </svg>
  )
}

// ─── External-image logo wrapper ─────────────────────────────────────────────
// Used for logos provided as hosted images (Vercel Blob URLs).

interface ImgLogoProps {
  src: string
  alt: string
  className?: string
  /** Override background for logos that need a contrasting tile (e.g. Twitch purple, phia blue) */
  bg?: string
  /** Padding inside the tile so the logo isn't flush to the edges */
  padded?: boolean
}

function ImgLogo({ src, alt, className, bg, padded }: ImgLogoProps) {
  return (
    <span
      className={`inline-flex items-center justify-center${padded ? " px-3 py-1.5" : ""}${bg ? ` rounded-lg` : ""}`}
      style={bg ? { background: bg } : undefined}
      aria-label={alt}
      role="img"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </span>
  )
}

// ─── External-image brand components ─────────────────────────────────────────

export function MicrosoftImgLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_logo_%282012%29.svg-aSkPx2iPPOmuHZS55B9yGcLhcSyfLO.png"
      alt="Microsoft"
      className={className}
    />
  )
}

export function SpaceXLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SpaceX-Logo.wine-H2Cjx0DEsriy39ZlYZLh113fc8cATe.svg"
      alt="SpaceX"
      className={className}
    />
  )
}

export function BrownieLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brownie-xl-wsS0KEuUnBWjvBejhAo0qoYbqGDCm7.png"
      alt="Brownie"
      className={className}
    />
  )
}

export function YCombinatorLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Y_Combinator_logo_text_wordmark-PO6n1POXQXLaYKnSVG7GSxW5zG0yH3.png"
      alt="Y Combinator"
      className={className}
    />
  )
}

export function PhiaLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f389fd85b38f8caf621fd9281dcd40668025a38a5a287ab9d3255cda401adf56-LEc8tPUNWySczn2qnDi6J5jWOtPJFQ.jpg"
      alt="phia"
      className={className}
      bg="#1a4ebd"
      padded
    />
  )
}

export function TwitchLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-twitch-logo-GbHOcCdzfw7CEDb31fggEEThJbplYT.jpg"
      alt="Twitch"
      className={className}
      bg="#9146FF"
      padded
    />
  )
}

export function MercadoLibreLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mercado-libre-logo-2-D6d0NHeypwClLhIQ9N8mnDJcsGpVW6.png"
      alt="Mercado Libre"
      className={className}
    />
  )
}

export function VictoriasSecretLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Victoria-Secret-Icon-Logo-Vector.svg--o54wv9E7GezfmYSkYRH9wusLqn60sq.png"
      alt="Victoria's Secret"
      className={className}
    />
  )
}

export function XAILogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XAI_Logo.svg-NZV01bXneNmsVT5cFUOBOfNMcuU2Rv.png"
      alt="xAI"
      className={className}
    />
  )
}

export function KylieCosmeticsLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-ZYXuqQ5KPTlQS3hDPigKXKUdmnKZqH.png"
      alt="Kylie Cosmetics"
      className={className}
    />
  )
}

export function HPLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HP_logo_2012.svg-CCfJp3wCe3mhEhGDjapOGravlCnFwT.png"
      alt="HP"
      className={className}
    />
  )
}

export function V0Logo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0-1-8p1JbYHEWE5XN6YY46nYtMCJhNadX8.svg"
      alt="v0 by Vercel"
      className={className}
    />
  )
}

export function GoogleImgLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google_2015_logo.svg-5PcToQtc5AQ18gPfN7zfYGkX20ntjZ.webp"
      alt="Google"
      className={className}
    />
  )
}

export function CapchaseLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capchase_Logo-vARPmXLkPB4R6jZENgUo6L1FJJ1Zs6.png"
      alt="Capchase"
      className={className}
    />
  )
}

export function NetflixImgLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Netflix_2015_logo.svg-A5JD9UKb7K6GNYjREjXqt15KqOzNoE.png"
      alt="Netflix"
      className={className}
    />
  )
}

export function VercelLogo({ className }: { className?: string }) {
  return (
    <ImgLogo
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vercel_logo_2025-deaRi6vEVoaitueJ1w4yP8yuKYZzcO.svg"
      alt="Vercel"
      className={className}
    />
  )
}

// ─── Unified carousel entry type ─────────────────────────────────────────────

export type CarouselEntry =
  | { kind: "svg"; name: string; Component: (props: LogoProps) => JSX.Element }
  | { kind: "img"; name: string; Component: (props: { className?: string }) => JSX.Element }

// ─── All carousel entries — 28 brands total ──────────────────────────────────

export const ALL_CAROUSEL_ENTRIES: CarouselEntry[] = [
  // Row 1 (track A) — inline SVGs
  { kind: "svg", name: "lululemon",       Component: LululemonLogo },
  { kind: "svg", name: "Nike",            Component: NikeLogo },
  { kind: "svg", name: "Dropbox",         Component: DropboxLogo },
  { kind: "svg", name: "Facebook",        Component: FacebookLogo },
  { kind: "svg", name: "GitHub",          Component: GitHubLogo },
  { kind: "svg", name: "Spotify",         Component: SpotifyLogo },
  { kind: "svg", name: "Shopify",         Component: ShopifyLogo },
  { kind: "svg", name: "Slack",           Component: SlackLogo },
  { kind: "svg", name: "Airbnb",          Component: AirbnbLogo },
  // External image logos
  { kind: "img", name: "Microsoft",       Component: MicrosoftImgLogo },
  { kind: "img", name: "Google",          Component: GoogleImgLogo },
  { kind: "img", name: "Netflix",         Component: NetflixImgLogo },
  { kind: "img", name: "SpaceX",          Component: SpaceXLogo },
  { kind: "img", name: "Brownie",         Component: BrownieLogo },
  { kind: "img", name: "Y Combinator",    Component: YCombinatorLogo },
  { kind: "img", name: "phia",            Component: PhiaLogo },
  { kind: "img", name: "Twitch",          Component: TwitchLogo },
  { kind: "img", name: "Mercado Libre",   Component: MercadoLibreLogo },
  { kind: "img", name: "Victoria's Secret", Component: VictoriasSecretLogo },
  { kind: "img", name: "xAI",             Component: XAILogo },
  { kind: "img", name: "Kylie Cosmetics", Component: KylieCosmeticsLogo },
  { kind: "img", name: "HP",              Component: HPLogo },
  { kind: "img", name: "v0",              Component: V0Logo },
  { kind: "img", name: "Capchase",        Component: CapchaseLogo },
  { kind: "img", name: "Vercel",          Component: VercelLogo },
]

// Legacy exports kept for backward compatibility with other files
export const BRAND_LOGOS = {
  lululemon: LululemonLogo,
  Nike: NikeLogo,
  Google: GoogleLogo,
  Dropbox: DropboxLogo,
  Netflix: NetflixLogo,
  Facebook: FacebookLogo,
  Microsoft: MicrosoftLogo,
  GitHub: GitHubLogo,
  Spotify: SpotifyLogo,
  Shopify: ShopifyLogo,
  Slack: SlackLogo,
  Airbnb: AirbnbLogo,
} as const

export type BrandName = keyof typeof BRAND_LOGOS

export const CAROUSEL_BRANDS: BrandName[] = [
  "lululemon", "Nike", "Google", "Dropbox",
  "Netflix", "Facebook", "Microsoft", "GitHub",
]

export const ALL_BRANDS: BrandName[] = [
  "lululemon", "Nike", "Google", "Dropbox",
  "Netflix", "Facebook", "Microsoft", "GitHub",
  "Spotify", "Shopify", "Slack", "Airbnb",
]
