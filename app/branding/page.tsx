import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "Branding | Lowveld Hub",
  description: "Branding and visual identity services for businesses that want to look sharper, more premium, and more consistent.",
  openGraph: {
    title: "Branding | Lowveld Hub",
    description: "Branding and visual identity services for businesses that want to look sharper, more premium, and more consistent.",
    type: "website",
    url: "https://www.lowveldhub.co.za/branding",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding | Lowveld Hub",
    description: "Branding and visual identity services for businesses that want to look sharper, more premium, and more consistent.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/branding",
  },
}

export default function BrandingPage() {
  return (
    <ServicePage
      title="Branding"
      description="Identity systems that make your business feel clearer, more credible, and more memorable across every touchpoint."
      intro="We help businesses shape a brand that feels polished and intentional, from positioning and messaging to visual identity and presentation."
      highlights={[
        "Visual identity and brand direction",
        "Messaging and positioning support",
        "Consistent brand systems for digital use",
        "Premium presentation for websites and marketing",
      ]}
    />
  )
}
