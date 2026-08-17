import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Systems | Lowveld Hub",
  description: "CRM, ERP, portals, dashboards and internal platforms that connect your operations.",
}

export default function BusinessSystemsPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob animate-drift absolute -left-20 top-10 size-72 rounded-full bg-primary/15" />
          <div className="blob animate-drift absolute right-0 top-40 size-80 rounded-full bg-gold/10 [animation-delay:3s]" />
        </div>

        <div className="mx-auto max-w-5xl">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to services
          </Link>

          <div className="mt-8">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-gold" />
              Business Systems
            </div>

            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              Systems That Connect Your Operations
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              CRM, ERP, portals, dashboards and internal platforms that connect your operations. We build systems that bring your teams and data together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-10px] hover:shadow-primary"
              >
                Start a Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:info@lowveldhub.co.za"
                className="inline-flex items-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/70"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What We Build</h2>
            <p className="mt-2 text-muted-foreground">From CRM to ERP, we build systems that unify your business.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "CRM Systems",
              "ERP Platforms",
              "Client Portals",
              "Custom Dashboards",
              "Workflow Management",
              "Internal Tools",
            ].map((item) => (
              <div
                key={item}
                className="glass rounded-2xl border border-border/40 p-6 transition-all hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lowveld Hub */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Lowveld Hub</h2>
            <p className="mt-2 text-muted-foreground">We understand business processes and build systems that actually work the way you do.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Process-Focused", desc: "We design around your workflows, not the other way around." },
              { title: "User-Friendly", desc: "Systems your team will actually want to use every day." },
              { title: "Scalable", desc: "Grows with your business from 5 users to 500." },
              { title: "Integration Ready", desc: "Connects with your existing tools and data sources." },
              { title: "Data Unified", desc: "Single source of truth across your entire organization." },
              { title: "Training Included", desc: "We make sure your team knows how to use it." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl border border-border/40 p-6">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our Process</h2>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-2 justify-between items-center">
            {["01 Discover", "02 Design", "03 Build", "04 Test", "05 Launch"].map((step, i) => (
              <div key={step} className="flex items-center gap-4 md:gap-2">
                <div className="glass rounded-full px-4 py-2 text-sm font-semibold text-foreground whitespace-nowrap">
                  {step}
                </div>
                {i < 4 && <div className="hidden md:block w-8 h-0.5 bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="glass rounded-3xl border border-border/40 p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Need a system that works?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's build a business system that connects your operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-10px] hover:shadow-primary"
              >
                Start a Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
