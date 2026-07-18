import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pb-20">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob animate-drift absolute -left-20 top-10 size-72 rounded-full bg-primary/30" />
        <div className="blob animate-drift absolute right-0 top-40 size-80 rounded-full bg-gold/25 [animation-delay:3s]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div className="animate-fade-up sm:text-center lg:text-left">
          <div className="glass animate-glow-pulse inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground sm:mx-auto lg:mx-0">
            Premium Digital Studio • Serving South Africa & Worldwide
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            We build exceptional digital products that help businesses grow.
          </h1>

          <p className="mt-6 mx-auto max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:max-w-2xl sm:text-lg lg:mx-0">
            From premium websites and mobile apps to custom software and AI automation, we design and engineer digital
            experiences that drive growth, improve efficiency, and create lasting competitive advantages.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#contact"
              className="group shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-10px] hover:shadow-primary"
            >
              Start a Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
            >
              View Our Work
            </a>
          </div>

        </div>

        {/* glass device mockup */}
        <div className="relative hidden animate-fade-up [animation-delay:150ms] lg:block">
          <div className="animate-float-slow relative mx-auto w-full max-w-xl sm:max-w-2xl">
            <div className="glass-strong overflow-hidden rounded-3xl p-2 shadow-2xl shadow-slate-900/10">
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
