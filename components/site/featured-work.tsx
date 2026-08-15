import Image from "next/image"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { SectionHeading } from "./section-heading"

export function FeaturedWork() {
  return (
    <section id="work" className="relative overflow-hidden py-5 sm:py-7">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute left-1/2 top-1/3 size-96 -translate-x-1/2 rounded-full bg-primary/15" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected case studies</p>
        </div>

        <div className="glass-strong mt-4 grid grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl p-4 sm:p-6 lg:grid-cols-2 lg:gap-8">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700">
              <TrendingUp className="size-3.5" /> Featured case study
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">BlueSky Financial</h3>


            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Challenge</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Modernise customer applications and create a smoother, more trustworthy journey for prospects and existing clients.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solution</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  A custom digital platform featuring a loan calculator, marketing website and WhatsApp integration to simplify inquiries and accelerate the customer journey.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Outcome</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Faster customer engagement, clearer information flow and a simpler path from interest to conversion.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Built With</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "PostgreSQL",
                  "OpenAI",
                  "Cloudflare",
                  "Vercel",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

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
