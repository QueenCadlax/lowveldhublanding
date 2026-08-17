import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { TrustStrip } from "@/components/site/trust-strip"
import { Services } from "@/components/site/services"

// Lazy load below-fold components
const Solutions = dynamic(() => import("@/components/site/solutions").then(mod => ({ default: mod.Solutions })))
const Industries = dynamic(() => import("@/components/site/industries").then(mod => ({ default: mod.Industries })))
const Inspiration = dynamic(() => import("@/components/site/inspiration").then(mod => ({ default: mod.Inspiration })))
const FeaturedWork = dynamic(() => import("@/components/site/featured-work").then(mod => ({ default: mod.FeaturedWork })))
const Process = dynamic(() => import("@/components/site/process").then(mod => ({ default: mod.Process })))
const Technology = dynamic(() => import("@/components/site/technology").then(mod => ({ default: mod.Technology })))
const Principles = dynamic(() => import("@/components/site/principles").then(mod => ({ default: mod.Principles })))
const Pricing = dynamic(() => import("@/components/site/pricing").then(mod => ({ default: mod.Pricing })))
const Faq = dynamic(() => import("@/components/site/faq").then(mod => ({ default: mod.Faq })))
const FinalCta = dynamic(() => import("@/components/site/final-cta").then(mod => ({ default: mod.FinalCta })))
const Footer = dynamic(() => import("@/components/site/footer").then(mod => ({ default: mod.Footer })))
const WhatsAppFloat = dynamic(() => import("@/components/site/whatsapp-float").then(mod => ({ default: mod.WhatsAppFloat })))

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
