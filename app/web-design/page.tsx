import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "Web Design | Lowveld Hub",
  description: "Premium web design for ambitious businesses that want beautiful, conversion-focused websites.",
  openGraph: {
    title: "Web Design | Lowveld Hub",
    description: "Premium web design for ambitious businesses that want beautiful, conversion-focused websites.",
    type: "website",
    url: "https://www.lowveldhub.co.za/web-design",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design | Lowveld Hub",
    description: "Premium web design for ambitious businesses that want beautiful, conversion-focused websites.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/web-design",
  },
}

export default function WebDesignPage() {
  return (
    <ServicePage
      title="Web Design"
      description="Conversion-focused websites that look premium, feel effortless to use, and help your business stand out online."
      intro="We design modern digital experiences with clear messaging, strong visual hierarchy, and a polished feel that builds trust from the first click."
      highlights={[
        "Strategic page structure and messaging",
        "Premium visual design tailored to your brand",
        "Mobile-first experiences that feel polished on every screen",
        "Design systems that scale as your business grows",
      ]}
    />
  )
}
