import { SectionHeading } from "./section-heading"

export function Pricing() {
  return (
    <section id="pricing" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="PROJECT INVESTMENT" title="Built around your requirements." />

        <div className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-border/60 p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(81,116,255,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.12),transparent_36%)]" />

          <div className="relative z-10">
            <p className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"><strong>Projects start from R10,000+.</strong></p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">Final investment is shaped by scope, complexity and your long-term objectives.</p>

            <div className="mt-8 flex justify-start">
              <a
                href="mailto:info@lowveldhub.co.za"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Get a quote →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
