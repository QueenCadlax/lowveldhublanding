import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "SEO | Lowveld Hub",
  description: "SEO strategy and optimisation that helps businesses improve visibility and attract the right clients online.",
  openGraph: {
    title: "SEO | Lowveld Hub",
    description: "SEO strategy and optimisation that helps businesses improve visibility and attract the right clients online.",
    type: "website",
    url: "https://www.lowveldhub.co.za/seo",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO | Lowveld Hub",
    description: "SEO strategy and optimisation that helps businesses improve visibility and attract the right clients online.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/seo",
  },
}

export default function SeoPage() {
  return (
    <ServicePage
      title="SEO"
      description="Search optimisation services designed to improve visibility, attract qualified traffic, and strengthen your online presence."
      intro="We combine technical and content-led SEO thinking to help your business appear more often for the searches that matter most."
      highlights={[
        "On-page SEO and content structure",
        "Technical SEO improvements for performance",
        "Keyword targeting and search intent alignment",
        "Long-term optimisation strategy",
      ]}
    />
  )
}
