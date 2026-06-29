"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled ? "glass-strong" : "border border-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Lowveld Hub home">
          <span className="relative flex size-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-[linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.95))] shadow-[0_14px_34px_-18px_rgba(15,23,42,0.5)] backdrop-blur-sm">
            <span className="absolute inset-[2px] rounded-[13px] border border-slate-900/5" />
            <svg viewBox="0 0 64 64" className="relative size-7 text-slate-900" aria-hidden="true">
              <rect x="14" y="14" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="1.6" fill="none" />
              <path d="M24 22v20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M24 22h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M34 22v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M34 32h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M42 22v20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-base font-semibold tracking-tight">
            Lowveld<span className="ml-1 text-primary">Hub</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="mailto:info@lowvelhub.co.za"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] transition-all hover:brightness-110 hover:shadow-[0_8px_24px_-8px] hover:shadow-primary"
          >
            Start a Project
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-lg text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong absolute inset-x-4 top-20 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:info@lowvelhub.co.za"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
