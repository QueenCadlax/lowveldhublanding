import type { Metadata } from "next"
import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { TrustStrip } from "@/components/site/trust-strip"
import { Services } from "@/components/site/services"
import { Solutions } from "@/components/site/solutions"
import { WhyUs } from "@/components/site/why-us"
import { Industries } from "@/components/site/industries"
import { Inspiration } from "@/components/site/inspiration"
import { FeaturedWork } from "@/components/site/featured-work"
import { Process } from "@/components/site/process"
import { Technology } from "@/components/site/technology"
import { Principles } from "@/components/site/principles"
import { Pricing } from "@/components/site/pricing"
import { Faq } from "@/components/site/faq"
import { FinalCta } from "@/components/site/final-cta"
import { Footer } from "@/components/site/footer"
import { WhatsAppFloat } from "@/components/site/whatsapp-float"

export const metadata: Metadata = {
  title: "Lowveld Hub | Web Development | Software Development & Digital Transformation",
  description:
    "Lowveld Hub is a premium South African technology company specialising in AI automation, custom software, websites, mobile apps, cloud solutions, business systems and digital transformation.",
  openGraph: {
    title: "Lowveld Hub | Web Development | Software Development & Digital Transformation",
    description:
      "Lowveld Hub is a premium South African technology company specialising in AI automation, custom software, websites, mobile apps, cloud solutions, business systems and digital transformation.",
    type: "website",
    url: "https://www.lowveldhub.co.za",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lowveld Hub | Web Development | Software Development & Digital Transformation",
    description:
      "Lowveld Hub is a premium South African technology company specialising in AI automation, custom software, websites, mobile apps, cloud solutions, business systems and digital transformation.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za",
  },
}

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Solutions />
      <WhyUs />
      <Industries />
      <Inspiration />
      <FeaturedWork />
      <Process />
      <Technology />
      <Principles />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
