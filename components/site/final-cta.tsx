import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section id="contact" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[1.5rem] px-6 py-10 text-center sm:px-10 sm:py-12">
        {/* premium deep blue background */}
        <div className="absolute inset-0 z-0 bg-[#0f2a4a]" />
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="blob animate-drift absolute -left-10 top-0 size-72 rounded-full bg-white/10" />
          <div className="blob animate-drift absolute -right-10 bottom-0 size-80 rounded-full bg-gold/10 [animation-delay:4s]" />
        </div>

        <h2 className="relative z-10 text-balance text-3xl font-semibold tracking-tight text-background sm:text-5xl">
          Ready when you are.
        </h2>
        <p className="relative z-10 mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-background/70 sm:text-lg">
          Whether you&apos;re launching a new business, modernising an existing one, or building a custom digital platform,
          we&apos;re here to help you bring it to life.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:info@lowveldhub.co.za"
            className="group shine inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-lg transition-all hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://wa.me/27673749762?text=Hi%20Lowveld%20Hub!%20I'm%20interested%20in%20your%20digital%20services.%20I'd%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  )
}
