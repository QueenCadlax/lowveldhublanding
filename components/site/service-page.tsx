import Link from "next/link"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

type ServicePageProps = {
  title: string
  description: string
  intro: string
  highlights: string[]
}

export function ServicePage({ title, description, intro, highlights }: ServicePageProps) {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob animate-drift absolute -left-20 top-10 size-72 rounded-full bg-primary/20" />
          <div className="blob animate-drift absolute right-0 top-40 size-80 rounded-full bg-gold/15 [animation-delay:3s]" />
        </div>

        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Sparkles className="size-3.5 text-gold" />
                Lowveld Hub Services
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
                >
                  Start a Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:info@lowveldhub.co.za"
                  className="inline-flex items-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/70"
                >
                  Book a consultation
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h2 className="text-xl font-semibold tracking-tight">What this service includes</h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 size-2 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
