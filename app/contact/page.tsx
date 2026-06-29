import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
  title: "Contact Lowveld Hub | Start a Project",
  description:
    "Get in touch with Lowveld Hub to discuss your website, app, software or automation project and receive a tailored quote.",
  openGraph: {
    title: "Contact Lowveld Hub | Start a Project",
    description:
      "Get in touch with Lowveld Hub to discuss your website, app, software or automation project and receive a tailored quote.",
    type: "website",
    url: "https://www.lowveldhub.co.za/contact",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lowveld Hub | Start a Project",
    description:
      "Get in touch with Lowveld Hub to discuss your website, app, software or automation project and receive a tailored quote.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      <section className="relative px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
            Contact Lowveld Hub
          </p>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Start a project or ask a question.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Share your goals and we’ll recommend the right digital solution for your business. Whether you need a website, mobile app, custom software, SEO or automation, we offer clear pricing and a practical roadmap.
          </p>

          <div className="mt-10 grid gap-6 rounded-3xl border border-border/70 bg-background/80 p-8 shadow-lg shadow-slate-900/5 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <a href="mailto:info@lowveldhub.co.za" className="mt-3 block text-sm font-medium text-primary hover:underline">
                info@lowveldhub.co.za
              </a>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Send a message with your project details and we’ll reply with next steps.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Quick links</h2>
              <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                <Link href="/web-design" className="block text-foreground transition hover:text-primary">
                  Web Design services
                </Link>
                <Link href="/website-development" className="block text-foreground transition hover:text-primary">
                  Website Development services
                </Link>
                <Link href="/custom-software" className="block text-foreground transition hover:text-primary">
                  Custom Software services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
