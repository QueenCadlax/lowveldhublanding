import { SectionHeading } from "./section-heading"

export function Pricing() {
  return (
    <section id="pricing" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Pricing" />

        <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-border/60 bg-card/40 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">From R5,000+ (≈ US$300+)</p>
          <p className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects start from R5,000, with final pricing based on your requirements.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every project is quoted individually to ensure you receive the right solution for your goals and budget.
          </p>

          <div className="mt-8 flex justify-start">
            <a
              href="mailto:info@lowvelhub.co.za"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Get a quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
