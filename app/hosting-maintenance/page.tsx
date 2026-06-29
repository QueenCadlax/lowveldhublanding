import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "Hosting & Maintenance | Lowveld Hub",
  description: "Reliable hosting and maintenance for websites and digital products that need consistent performance and support.",
}

export default function HostingMaintenancePage() {
  return (
    <ServicePage
      title="Hosting & Maintenance"
      description="Reliable hosting, updates, and support so your digital presence stays secure, fast, and running smoothly."
      intro="We keep your website or platform healthy after launch with dependable monitoring, maintenance, and quick support whenever issues arise."
      highlights={[
        "Secure hosting and performance monitoring",
        "Regular updates and maintenance",
        "Reliable support for ongoing issues",
        "Peace of mind for long-term operations",
      ]}
    />
  )
}
