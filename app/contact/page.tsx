import type { Metadata } from "next"
import { ContactPageContent } from "@/components/site/contact-page-content"

export const metadata: Metadata = {
  title: "Start Your Project | Lowveld Hub",
  description:
    "Tell Lowveld Hub about your website, software, AI or digital transformation project and request a tailored proposal.",
  openGraph: {
    title: "Start Your Project | Lowveld Hub",
    description:
      "Tell Lowveld Hub about your website, software, AI or digital transformation project and request a tailored proposal.",
    type: "website",
    url: "https://www.lowveldhub.co.za/contact",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Project | Lowveld Hub",
    description:
      "Tell Lowveld Hub about your website, software, AI or digital transformation project and request a tailored proposal.",
  },
  alternates: {
    canonical: "https://www.lowveldhub.co.za/contact",
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
