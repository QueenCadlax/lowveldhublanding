const industries = [
  "Legal & Finance",
  "Real Estate",
  "Healthcare",
  "Retail",
  "Hospitality",
  "Professional Services",
  "Education",
  "Startups",
]

export function Industries() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
            Helping businesses across multiple industries build better digital experiences.
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {industries.map((name) => (
            <span
              key={name}
              className="rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm text-muted-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
