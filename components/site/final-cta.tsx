import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section id="contact" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-14">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(7,14,27,0.98),rgba(17,28,53,0.96))]" />
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
          <div className="cta-particles" aria-hidden="true">
            <span style={{ top: "18%", left: "10%", animationDelay: "0s" }} />
            <span style={{ top: "24%", left: "82%", animationDelay: "1.1s" }} />
            <span style={{ top: "68%", left: "18%", animationDelay: "2.2s" }} />
            <span style={{ top: "58%", left: "74%", animationDelay: "3s" }} />
            <span style={{ top: "38%", left: "44%", animationDelay: "4.1s" }} />
          </div>
          <div className="blob animate-drift absolute -left-8 top-0 size-72 rounded-full bg-white/10" />
          <div className="blob animate-drift absolute -right-8 bottom-0 size-80 rounded-full bg-primary/20 [animation-delay:4s]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background">START A PROJECT</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-background sm:text-5xl lg:text-6xl">Let's build something exceptional.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-background/72 sm:text-lg">Tell us what you're building. We'll help you turn it into a digital solution that works.</p>
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
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
