import Image from "next/image"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { SectionHeading } from "./section-heading"

export function FeaturedWork() {
  return (
    <section id="work" className="relative overflow-hidden py-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute left-1/2 top-1/3 size-96 -translate-x-1/2 rounded-full bg-primary/15" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
        </div>

        {/* Main project */}
        <div className="glass-strong mt-6 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700">
              <TrendingUp className="size-3.5" /> Featured project
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">BlueSky Financial</h3>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
              A complete digital platform for a financial services provider, including a marketing website, loan
              calculator, and WhatsApp application system.
            </p>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Built to improve trust, streamline approvals, and simplify the customer journey from application to
              payout.
            </p>
            <a
              href="https://www.blueskyfinance.co.za/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              View Live Site <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/client 2.png"
                alt="BlueSky Financial website and mobile app mockup"
                width={800}
                height={600}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
