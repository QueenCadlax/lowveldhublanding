import type { Metadata } from "next"
import { ServicePage } from "@/components/site/service-page"

export const metadata: Metadata = {
  title: "AI Automation | Lowveld Hub",
  description: "AI automation solutions that help businesses reduce admin, save time, and operate more efficiently.",
}

export default function AIAutomationPage() {
  return (
    <ServicePage
      title="AI Automation"
      description="Practical AI systems that remove manual work, improve consistency, and help your team focus on higher-value tasks."
      intro="We design automation that fits your business needs, from simple task streamlining to smarter decision-support systems that unlock time and efficiency."
      highlights={[
        "Workflow automation and intelligent assistants",
        "Smart content and data processing systems",
        "Custom integrations with your existing tools",
        "Clear implementation with measurable efficiency gains",
      ]}
    />
  )
}
