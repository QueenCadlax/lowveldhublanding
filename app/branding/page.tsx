import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "Branding | Lowveld Hub",
  description: "Branding and visual identity services for businesses that want to look sharper, more premium, and more consistent.",
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
