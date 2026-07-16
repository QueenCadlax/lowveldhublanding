const benefits = [
  "Fast turnaround",
  "Premium design",
  "Mobile-first development",
  "SEO-ready websites",
  "Secure & scalable builds",
  "Ongoing support",
]

export function TrustBar() {
  return (
    <section className="border-t border-border/60 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Why businesses choose Lowveld Hub
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {benefits.map((item) => (
            <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-2">
              <span className="text-primary">✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
