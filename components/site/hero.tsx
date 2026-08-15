"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

export function Hero() {
  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`)
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`)
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-10 sm:pt-20 lg:pb-12">
      <div className="aurora-shell" />
      <div className="grid-overlay" />
      <div className="neural-network hidden lg:block" />
      <div className="hero-particles hidden lg:block" aria-hidden="true">
        <span style={{ top: "18%", left: "14%", animationDelay: "0s" }} />
        <span style={{ top: "32%", left: "22%", animationDelay: "1.5s" }} />
        <span style={{ top: "44%", left: "18%", animationDelay: "2.5s" }} />
        <span style={{ top: "24%", left: "78%", animationDelay: "1.2s" }} />
        <span style={{ top: "55%", left: "74%", animationDelay: "3.1s" }} />
        <span style={{ top: "62%", left: "86%", animationDelay: "4.2s" }} />
      </div>
      <div className="cursor-light" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-6">
        <div className="animate-fade-up sm:text-center lg:text-left">
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
            Engineering the Future of Business.
          </h1>

          <p className="mt-6 mx-auto max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:max-w-2xl sm:text-lg lg:mx-0">
            We design and build premium websites, software, AI solutions and business systems for ambitious organisations.
          </p>

          

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="/contact"
              className="group shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-10px] hover:shadow-primary"
            >
              Start a Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#inspiration"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
            >
              View Our Work
            </a>
          </div>

        </div>

        {/* glass device mockup */}
        <div className="relative hidden animate-fade-up [animation-delay:150ms] lg:block">
          <div className="animate-float-slow relative mx-auto w-full max-w-xl sm:max-w-2xl">
            <div className="glass-strong premium-card overflow-hidden rounded-2xl p-1.5 shadow-xl shadow-slate-900/10">
              <div className="pointer-events-none absolute inset-x-8 top-4 h-20 rounded-full bg-primary/10 blur-3xl" />
              <Image
                src="/new hero 5.png"
                alt="Lowveld Hub — new hero 5 visual"
                width={920}
                height={720}
                priority
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}
