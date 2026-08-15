import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"

export const metadata: Metadata = {
  title: "Web Development & Software Services | Lowveld Hub",
  description:
    "Explore Lowveld Hub services including website development, custom software, AI automation, mobile apps, cloud support and SEO.",
  openGraph: {
    title: "Web Development & Software Services | Lowveld Hub",
    description:
      "Explore Lowveld Hub services including website development, custom software, AI automation, mobile apps, cloud support and SEO.",
    type: "website",
    url: "https://www.lowveldhub.co.za/services",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Software Services | Lowveld Hub",
    description:
      "Explore Lowveld Hub services including website development, custom software, AI automation, mobile apps, cloud support and SEO.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/services",
  },
}

const services = [
  {
    title: "Website Development",
    description: "Fast, scalable websites and web platforms built for modern businesses.",
    href: "/website-development",
  },
  {
    title: "Web Design",
    description: "Premium digital experiences with strong clarity, polish and conversion focus.",
    href: "/web-design",
  },
  {
    title: "Custom Software",
    description: "Purpose-built systems for operations, workflows and internal business tooling.",
    href: "/custom-software",
  },
  {
    title: "AI Automation",
    description: "Practical automation and AI workflows that save time and improve decision-making.",
    href: "/ai-automation",
  },
  {
    title: "Mobile App Development",
    description: "High-quality mobile experiences built to engage users and support growth.",
    href: "/mobile-app-development",
  },
  {
    title: "Hosting & Maintenance",
    description: "Reliable hosting, support and performance care for production systems.",
    href: "/hosting-maintenance",
  },
  {
    title: "SEO",
    description: "Search visibility and optimisation strategies that strengthen online growth.",
    href: "/seo",
  },
]

export default function ServicesPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob animate-drift absolute -left-20 top-10 size-72 rounded-full bg-primary/20" />
          <div className="blob animate-drift absolute right-0 top-40 size-80 rounded-full bg-gold/15 [animation-delay:3s]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-gold" />
              Lowveld Hub Services
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Web development and software services for ambitious businesses.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design and build digital products that improve performance, strengthen operations and help businesses grow with confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="glass premium-card rounded-[1.6rem] p-6 transition-all duration-300"
              >
                <h2 className="text-lg font-semibold tracking-tight text-foreground">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
