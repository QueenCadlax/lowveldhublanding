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
        <SectionHeading title="Our Process" />

        <div className="relative mt-10">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <div className="glass-strong relative z-10 flex size-12 items-center justify-center rounded-full text-sm font-semibold text-primary">
                  {s.n}
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
