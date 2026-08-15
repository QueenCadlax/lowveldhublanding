import { SectionHeading } from "./section-heading"

const principles = [
  {
    title: "Performance First",
    desc: "Fast, scalable, reliable.",
  },
  {
    title: "Purposeful Design",
    desc: "Every interaction has intent.",
  },
  {
    title: "Long-Term Thinking",
    desc: "Built to grow with your business.",
  },
  {
    title: "Partnership Over Delivery",
    desc: "Measured by outcomes, not handoff.",
  },
]

export function Principles() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="HOW WE BUILD" title="Built with intention." align="center" />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <div key={item.title} className="glass premium-card rounded-2xl p-5">
              <h3 className="text-sm font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
