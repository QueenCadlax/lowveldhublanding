import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="hero-bg absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 hero-overlay" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-24 sm:px-6">
        <div className="w-full max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-2xl">
            <Sparkles className="size-3.5 text-gold" />
            Premium Digital Studio • South Africa
          </div>

          <h1 className="mt-10 text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.6rem] md:text-[4.8rem] lg:text-[6rem]">
            We Build Digital Products
            <span className="block">That <span className="text-gold">Grow</span> Businesses.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-200/80 sm:text-base md:text-lg">
            We design and engineer premium websites, mobile apps, custom software, and AI-powered systems that help ambitious businesses scale, automate, and stand out.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex min-w-[220px] items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_18px_48px_-30px_rgba(255,191,0,0.95)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Start Your Project
              <ArrowRight className="size-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              View Our Work
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-300/80">
            Trusted by ambitious businesses across South Africa and worldwide.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="scroll-indicator flex h-14 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <span className="h-3.5 w-3.5 rounded-full bg-white/80 animate-bounce-slow" />
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
