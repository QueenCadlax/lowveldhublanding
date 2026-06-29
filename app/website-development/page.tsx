import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "Website Development | Lowveld Hub",
  description: "Fast, scalable website development for businesses that need reliable digital products built to perform.",
  openGraph: {
    title: "Website Development | Lowveld Hub",
    description: "Fast, scalable website development for businesses that need reliable digital products built to perform.",
    type: "website",
    url: "https://www.lowveldhub.co.za/website-development",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development | Lowveld Hub",
    description: "Fast, scalable website development for businesses that need reliable digital products built to perform.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/website-development",
  },
}

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePage
      title="Website Development"
      description="High-performance websites and web apps built with modern engineering practices for speed, reliability, and growth."
      intro="From launch-ready marketing sites to more advanced web platforms, we build experiences that are fast, maintainable, and ready for the next stage of growth."
      highlights={[
        "Modern front-end and back-end architecture",
        "Fast-loading experiences optimised for performance",
        "Scalable builds that are easy to maintain",
        "Seamless deployment and ongoing support",
      ]}
    />
  )
}
