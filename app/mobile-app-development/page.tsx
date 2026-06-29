import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "Mobile App Development | Lowveld Hub",
  description: "Premium mobile app development for businesses that want polished apps that feel native and perform beautifully.",
  openGraph: {
    title: "Mobile App Development | Lowveld Hub",
    description: "Premium mobile app development for businesses that want polished apps that feel native and perform beautifully.",
    type: "website",
    url: "https://www.lowveldhub.co.za/mobile-app-development",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | Lowveld Hub",
    description: "Premium mobile app development for businesses that want polished apps that feel native and perform beautifully.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/mobile-app-development",
  },
}

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePage
      title="Mobile App Development"
      description="Polished mobile apps designed to help your business engage users, streamline operations, and grow faster."
      intro="We build thoughtful mobile experiences with clean interfaces, dependable performance, and product thinking that keeps the user experience front and centre."
      highlights={[
        "Mobile-first product strategy",
        "High-quality UI and interaction design",
        "Reliable app development and implementation",
        "Post-launch refinement and support",
      ]}
    />
  )
}
