import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "Custom Software | Lowveld Hub",
  description: "Custom software solutions designed to solve operational challenges and improve how teams work every day.",
}

export default function CustomSoftwarePage() {
  return (
    <ServicePage
      title="Custom Software"
      description="Purpose-built software solutions that simplify workflows, strengthen operations, and support long-term growth."
      intro="Whether you need internal tools, client portals, or a more complex platform, we create software that fits your business instead of forcing you into a generic system."
      highlights={[
        "Workflow automation and internal tools",
        "Purpose-built platforms for your processes",
        "Scalable architecture for future growth",
        "Professional implementation and support",
      ]}
    />
  )
}
