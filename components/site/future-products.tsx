import { Lock } from "lucide-react"
import { SectionHeading } from "./section-heading"

export function FutureProducts() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Future Products"
          description="Alongside client projects, Lowveld Hub is building a suite of digital products designed to help businesses connect, operate more efficiently and grow through technology."
          align="center"
          className="max-w-3xl"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-base font-semibold tracking-tight">
              <span>Discover</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A curated business discovery platform connecting customers with trusted businesses across South Africa.
              <br />
              <span className="font-medium text-foreground">Coming Soon.</span>
            </p>
            <button
              type="button"
              disabled
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground opacity-70"
            >
              <Lock className="size-4" />
              Learn More
            </button>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-base font-semibold tracking-tight">
              <span>More Products</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We’re actively developing additional AI and SaaS products that will launch in the future.
              <br />
              <span className="font-medium text-foreground">Stay tuned.</span>
            </p>
            <button
              type="button"
              disabled
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground opacity-70"
            >
              <Lock className="size-4" />
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
