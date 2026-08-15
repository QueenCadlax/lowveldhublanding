import { SectionHeading } from "./section-heading"

const solutions = [
  "Customer Platforms",
  "Business Portals",
  "Mobile Applications",
  "E-commerce Platforms",
  "CRM & ERP Systems",
  "AI Agents & Automation",
  "Data Dashboards",
  "Booking Platforms",
  "Payment Integrations",
  "API Integrations",
  "Workflow Automation",
  "Cloud Platforms",
]

export function Solutions() {
  return (
    <section className="py-5 sm:py-7">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="CAPABILITIES" title="What we can build." className="max-w-full" />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {solutions.map((item) => (
            <div
              key={item}
              className="glass rounded-xl border border-border/60 px-3 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
