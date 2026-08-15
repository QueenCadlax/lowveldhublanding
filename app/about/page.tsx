import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
  title: "About Lowveld Hub | Software & Digital Solutions South Africa",
  description:
    "Learn who Lowveld Hub is, what we believe, and why businesses choose us to build premium websites, business systems and AI-powered digital solutions.",
  openGraph: {
    title: "About Lowveld Hub | Software & Digital Solutions South Africa",
    description:
      "Learn who Lowveld Hub is, what we believe, and why businesses choose us to build premium websites, business systems and AI-powered digital solutions.",
    type: "website",
    url: "https://www.lowveldhub.co.za/about",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lowveld Hub | Software & Digital Solutions South Africa",
    description:
      "Learn who Lowveld Hub is, what we believe, and why businesses choose us to build premium websites, business systems and AI-powered digital solutions.",
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
            Building technology that helps businesses grow.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Lowveld Hub is a South African software and digital solutions company helping businesses build better digital experiences through premium websites, custom software, AI solutions and business systems.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We partner with startups, growing businesses and established organisations to design technology that improves efficiency, supports growth and creates long-term business value.
          </p>

          <div className="mt-10 grid gap-6 rounded-3xl border border-border/70 bg-background/80 p-8 shadow-lg shadow-slate-900/5 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">What We Do</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We combine strategy, design and engineering to create digital solutions that are built around your business, not templates.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every project is carefully planned, professionally designed and engineered for performance, scalability and long-term success.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Our Approach</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Technology should solve problems, not create them.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                That&apos;s why every project begins with understanding your business, your goals and the challenges you&apos;re trying to solve.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-3xl border border-border/70 bg-background/80 p-8 shadow-lg shadow-slate-900/5">
            <h2 className="text-2xl font-semibold tracking-tight">Our Process</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              From idea to launch, every project follows a clear, collaborative process designed to deliver quality, transparency and measurable results.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "01",
                  title: "Discovery",
                  text: "We learn about your business, goals and challenges before recommending the right solution.",
                },
                {
                  id: "02",
                  title: "Planning",
                  text: "We define the project scope, timeline and roadmap so everyone is aligned from the beginning.",
                },
                {
                  id: "03",
                  title: "Design",
                  text: "We design premium, user-focused experiences that reflect your brand and business objectives.",
                },
                {
                  id: "04",
                  title: "Development",
                  text: "Using modern technologies, we build scalable digital solutions while keeping you updated throughout the project.",
                },
                {
                  id: "05",
                  title: "Launch & Support",
                  text: "After launch, we continue supporting, maintaining and improving your solution as your business grows.",
                },
              ].map((step) => (
                <div
                  key={step.id}
                  className="group flex items-start gap-4 rounded-xl border border-border/60 bg-background p-4 transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white text-lg font-semibold text-primary shadow-sm">
                    {step.id}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-border/70 bg-background/80 p-8 shadow-lg shadow-slate-900/5">
            <h2 className="text-2xl font-semibold tracking-tight">Our Principles</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-foreground">Performance First</p>
                <p className="mt-1 text-sm text-muted-foreground">Fast, reliable technology built to scale.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Purposeful Design</p>
                <p className="mt-1 text-sm text-muted-foreground">Every interaction has a reason.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Business Focused</p>
                <p className="mt-1 text-sm text-muted-foreground">Technology should deliver measurable value.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Long-Term Partnership</p>
                <p className="mt-1 text-sm text-muted-foreground">We&apos;re invested in your growth beyond launch.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
