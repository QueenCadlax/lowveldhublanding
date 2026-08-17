"use client"

import { useState } from "react"
import Image from "next/image"
import { useEffect } from "react"

const items = [
  { category: "FINE DINING", name: "FYN", href: "https://fynrestaurant.com/", image: "/fyn lvh.jpg" },
  { category: "LUXURY DEVELOPMENT", name: "STEYN CITY", href: "https://steyncity.co.za/", image: "/steyn lvh.jpg" },
  { category: "SAFARI & LODGE", name: "ROYAL MALEWANE", href: "https://www.theroyalportfolio.com/royal-malewane/", image: "/royal lvh.jpg" },
]

export function Inspiration() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)")
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile((e as any).matches)
    setIsMobile(mq.matches)
    if (mq.addEventListener) mq.addEventListener("change", handler)
    else mq.addListener(handler)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler)
      else mq.removeListener(handler)
    }
  }, [])

  const visible = items.slice(0, isMobile ? 4 : 6)

  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 id="inspiration" className="text-lg font-semibold tracking-tight text-primary">See what's possible.</h3>
          <p className="mt-2 text-[0.75rem] text-muted-foreground">Exceptional digital experiences, reimagined for your business.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((it) => (
            <a
              key={it.name}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-48 items-end overflow-hidden rounded-2xl border border-border/60 bg-neutral-900/40 text-white transition-transform hover:-translate-y-1"
            >
              {it.image ? (
                <div className="absolute inset-0 -z-10">
                  <Image src={it.image} alt={`${it.category} — ${it.name} inspiration`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.6))]" />
                </div>
              ) : (
                <div className="absolute inset-0 bg-neutral-800/60" />
              )}

              <div className="relative z-10 p-4">
                <p className="text-xs font-semibold tracking-widest text-muted-foreground">{it.category}</p>
                <h3 className="mt-2 text-lg font-medium tracking-wide [font-family:var(--font-heading)]">{it.name}</h3>
              </div>
              <span className="absolute right-4 top-4 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-sm opacity-90">→</span>
            </a>
          ))}
        </div>

        
      </div>
    </section>
  )
}
