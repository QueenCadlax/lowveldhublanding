import { SectionHeading } from "./section-heading"

const features = [
  {
    id: "01",
    title: "Premium Design",
    desc: "Refined digital experiences built to represent your business properly.",
  },
  {
    id: "02",
    title: "Built for Growth",
    desc: "Technology designed around your goals, not generic templates.",
  },
  {
    id: "03",
    title: "Long-Term Support",
    desc: "We don't disappear after launch.",
  },
]

export function WhyUs() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="WHY LOWVELD HUB" title="Built to perform." />
        <div className="mt-6 max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">Premium by design. Built for growth.</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`relative rounded-lg border border-border/40 bg-transparent p-4 sm:p-5 text-left ${idx === features.length - 1 ? "col-span-2 sm:col-span-1 lg:col-span-1" : ""}`}
            >
              <div className="flex items-start gap-3">
                <div className="text-sm font-medium text-primary/90">{f.id} —</div>
                <div>
                  <h4 className="text-sm font-semibold leading-snug">{f.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
