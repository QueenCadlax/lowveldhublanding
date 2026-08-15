export function TrustBar() {
  return (
    <section className="border-t border-border/60 px-4 py-8 sm:px-6 sm:py-10">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-[linear-gradient(135deg,rgba(235,242,255,0.96),rgba(214,229,255,0.9))] p-6 text-center shadow-[0_18px_50px_-24px_rgba(59,130,246,0.35)] sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(81,116,255,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.12),transparent_36%)]" />
        <div className="relative z-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Let's Build Something Exceptional.
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Whether you&apos;re launching a new website, building custom software or exploring AI solutions, we&apos;re ready to help you create technology that drives measurable business growth.
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
          >
            Start your project
          </a>
          <a
            href="mailto:info@lowveldhub.co.za"
            className="inline-flex items-center justify-center rounded-full border border-border/60 bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
          >
            Book a strategy call
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}
