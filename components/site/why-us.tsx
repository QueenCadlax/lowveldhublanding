import { SectionHeading } from "./section-heading"

const features = [
  { title: "Fast Delivery", desc: "Most launches happen in weeks, not months." },
  { title: "Premium Design", desc: "Refined, intentional and built to impress." },
  { title: "Business Focused", desc: "Designed around growth and measurable outcomes." },
  { title: "Transparent Communication", desc: "Clear timelines, regular updates and no surprises." },
  { title: "Long-Term Support", desc: "We stay involved beyond launch." },
]

export function WhyUs() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="WHY LOWVELD HUB" title="Built to perform." />
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-base font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
