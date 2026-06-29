import type { Metadata } from "next"
import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { TrustStrip } from "@/components/site/trust-strip"
import { Services } from "@/components/site/services"
import { WhyUs } from "@/components/site/why-us"
import { Industries } from "@/components/site/industries"
import { FeaturedWork } from "@/components/site/featured-work"
import { HowItWorks } from "@/components/site/how-it-works"
import { Technology } from "@/components/site/technology"
import { Pricing } from "@/components/site/pricing"
import { Faq } from "@/components/site/faq"
import { PaymentPolicy } from "@/components/site/payment-policy"
import { FinalCta } from "@/components/site/final-cta"
import { TrustBar } from "@/components/site/trust-bar"
import { Footer } from "@/components/site/footer"
import { WhatsAppFloat } from "@/components/site/whatsapp-float"

export const metadata: Metadata = {
  title: "Lowveld Hub | Premium Digital Agency",
  description:
    "Building premium websites, mobile apps, custom software and AI-powered digital solutions for businesses in South Africa and worldwide.",
  openGraph: {
    title: "Lowveld Hub | Premium Digital Agency",
    description:
      "Building premium websites, mobile apps, custom software and AI-powered digital solutions for businesses in South Africa and worldwide.",
    type: "website",
    url: "https://www.lowveldhub.co.za",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lowveld Hub | Premium Digital Agency",
    description:
      "Building premium websites, mobile apps, custom software and AI-powered digital solutions for businesses in South Africa and worldwide.",
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
      <WhyUs />
      <Industries />
      <FeaturedWork />
      <HowItWorks />
      <Technology />
      <Pricing />
      <Faq />
      <PaymentPolicy />
      <FinalCta />
      <TrustBar />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
