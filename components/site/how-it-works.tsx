import { SectionHeading } from "./section-heading"

const steps = [
  { n: "01", title: "Discovery", desc: "We learn your business, goals and audience." },
  { n: "02", title: "Planning", desc: "A clear scope, timeline and strategy you sign off on." },
  { n: "03", title: "Design", desc: "Premium, on-brand interfaces designed to convert." },
  { n: "04", title: "Development", desc: "Clean, scalable engineering with regular previews." },
  { n: "05", title: "Launch", desc: "We ship, monitor and support your growth." },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Our Process" align="left" className="max-w-full" />

        <div className="relative mt-6">
          <ol className="grid grid-cols-2 gap-3 sm:gap-4">
            {steps.map((s) => (
              <li key={s.n} className="glass relative overflow-hidden rounded-3xl border border-border p-4 sm:p-5">
                <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {s.n}
                </div>
                <h3 className="mt-3 text-sm font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
