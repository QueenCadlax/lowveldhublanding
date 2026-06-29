import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
  title: "About Lowveld Hub | Digital Agency South Africa",
  description:
    "Learn how Lowveld Hub helps South African businesses grow with premium websites, apps, custom software, AI automation and long-term support.",
  openGraph: {
    title: "About Lowveld Hub | Digital Agency South Africa",
    description:
      "Learn how Lowveld Hub helps South African businesses grow with premium websites, apps, custom software, AI automation and long-term support.",
    type: "website",
    url: "https://www.lowveldhub.co.za/about",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lowveld Hub | Digital Agency South Africa",
    description:
      "Learn how Lowveld Hub helps South African businesses grow with premium websites, apps, custom software, AI automation and long-term support.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/about",
  },
}

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      <section className="relative px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
            About Lowveld Hub
          </p>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Digital systems built to help businesses perform better.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We are a South Africa-based digital studio focused on premium websites, mobile apps, custom software, AI automation and ongoing support. Every project is quoted individually so the result matches your goals, your brand and your budget.
          </p>

          <div className="mt-10 grid gap-6 rounded-3xl border border-border/70 bg-background/80 p-8 shadow-lg shadow-slate-900/5 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">What we do</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We combine design, engineering and product strategy to deliver digital products that look premium, perform reliably and support real business growth.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">How we work</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every project starts with a clear brief, a service recommendation, and a proposal that matches your goals. We then deliver with tight communication, accountability and quality support.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/web-design" className="rounded-2xl border border-border/70 bg-slate-50 px-5 py-6 text-sm font-semibold transition hover:bg-slate-100">
              Web Design
            </Link>
            <Link href="/website-development" className="rounded-2xl border border-border/70 bg-slate-50 px-5 py-6 text-sm font-semibold transition hover:bg-slate-100">
              Website Development
            </Link>
            <Link href="/custom-software" className="rounded-2xl border border-border/70 bg-slate-50 px-5 py-6 text-sm font-semibold transition hover:bg-slate-100">
              Custom Software
            </Link>
            <Link href="/contact" className="rounded-2xl border border-border/70 bg-slate-50 px-5 py-6 text-sm font-semibold transition hover:bg-slate-100">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
