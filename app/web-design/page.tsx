import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "Web Design | Lowveld Hub",
  description: "Premium web design for ambitious businesses that want beautiful, conversion-focused websites.",
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
