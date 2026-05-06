"use client"

import { useMotion } from "@/components/motion-provider"

/**
 * TickerBanner — neubrutalist scrolling tape strip.
 * Two rows: one scrolling left (black), one scrolling right (orange).
 * Every Sticker Mule product category is represented.
 */

const ITEMS_TOP = [
  "STICKERS",
  "LABELS",
  "MAGNETS",
  "BUTTONS & PINS",
  "PACKAGING",
  "APPAREL",
  "ACRYLICS",
  "FREE WORLDWIDE SHIPPING",
  "FREE PROOFS",
  "SHIPS IN 4 DAYS",
]

const ITEMS_BOTTOM = [
  "DIE-CUT STICKERS",
  "CUSTOM LABELS",
  "FRIDGE MAGNETS",
  "BUTTON BADGES",
  "POLY MAILERS",
  "CUSTOM T-SHIRTS",
  "ACRYLIC KEYCHAINS",
  "350K+ BUSINESSES",
  "100M+ SHIPPED",
  "NO MINIMUM ORDER",
]

const STAR = (
  <span aria-hidden="true" className="mx-4 text-primary font-black select-none">
    ★
  </span>
)

function TickerRow({
  items,
  direction,
  bgClass,
  textClass,
  duration,
}: {
  items: string[]
  direction: "left" | "right"
  bgClass: string
  textClass: string
  duration: number
}) {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items]

  return (
    <div
      className={`${bgClass} border-y-2 border-foreground overflow-hidden py-2`}
      aria-hidden="true"
    >
      <div
        className={`flex whitespace-nowrap ${textClass}`}
        style={{
          animation: `${direction === "left" ? "scroll-left" : "scroll-right"} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center font-mono font-bold text-xs tracking-widest uppercase">
            {item}
            {STAR}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TickerBanner() {
  const { reduceMotion } = useMotion()

  if (reduceMotion) {
    // Static fallback for reduced-motion users
    return (
      <div className="py-3 bg-foreground" aria-hidden="true">
        <p className="text-center font-mono font-bold text-xs tracking-widest uppercase text-background">
          STICKERS &nbsp; LABELS &nbsp; MAGNETS &nbsp; BUTTONS &amp; PINS &nbsp;
          PACKAGING &nbsp; APPAREL &nbsp; ACRYLICS &nbsp; FREE SHIPPING
        </p>
      </div>
    )
  }

  return (
    <div className="nb-divider-wrapper" role="presentation">
      {/* Top row — black background, scrolls left */}
      <TickerRow
        items={ITEMS_TOP}
        direction="left"
        bgClass="bg-foreground"
        textClass="text-background"
        duration={28}
      />
      {/* Bottom row — orange background, scrolls right */}
      <TickerRow
        items={ITEMS_BOTTOM}
        direction="right"
        bgClass="bg-primary"
        textClass="text-primary-foreground"
        duration={34}
      />
    </div>
  )
}
