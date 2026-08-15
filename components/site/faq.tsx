"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most small builds launch in 1–2 weeks. Larger apps and custom systems take longer, and we’ll confirm the timeline clearly before we begin.",
  },
  {
    q: "How much does a website cost?",
    a: "Website investment depends on scope, functionality and timeline. We tailor each quote to your goals, so you get the right solution for your business rather than a generic package.",
  },
  {
    q: "Do you build eCommerce websites?",
    a: "Yes. We design and build premium eCommerce websites with strong product presentation, conversion-focused user journeys and scalable storefront experiences.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We can redesign underperforming websites, improve usability, modernise the experience and help your business convert more visitors into customers.",
  },
  {
    q: "Why choose Lowveld Hub over other agencies?",
    a: "We combine premium design, modern software engineering and AI expertise to build solutions that help businesses grow, automate and scale. Our focus is on long-term partnerships, measurable outcomes and technology built for the future.",
  },
  {
    q: "Can you build custom business software?",
    a: "Yes. We design and build custom business systems, internal tools, customer portals, workflow platforms and scalable software tailored to your operations.",
  },
  {
    q: "Do you develop AI solutions?",
    a: "Yes. We can help you implement AI automation, AI workflows, intelligent bots and agent-based systems that reduce repetitive work and improve decision-making.",
  },
  {
    q: "Do you work with clients outside South Africa?",
    a: "Yes. We work with businesses throughout South Africa and internationally using virtual meetings, collaborative project management and secure online payment methods.",
  },
  {
    q: "Can you automate our business processes?",
    a: "Yes. We can map operational tasks, connect systems and implement workflow automation that removes manual effort across your business.",
  },
  {
    q: "Do you provide cloud hosting?",
    a: "Yes. We can support cloud hosting, deployment, devops, monitoring, security and long-term infrastructure management for production systems.",
  },
  {
    q: "Do you maintain existing systems?",
    a: "Yes. We provide ongoing maintenance, updates, technical support and optimisation services to keep systems secure and reliable.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We understand the importance of confidentiality and can work under a signed NDA whenever required.",
  },
  {
    q: "Can you work with our internal team?",
    a: "Yes. We regularly collaborate with internal stakeholders, product teams and technical leads to align delivery, communication and outcomes.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer post-launch support, optimisation and ongoing technical care to help your solution stay stable, secure and effective after release.",
  },
  {
    q: "Can you redesign enterprise software?",
    a: "Yes. We can modernise legacy or underperforming systems, improve the user experience and redesign business software for more efficiency and scalability.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="faq" className="py-6 sm:py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Answers to common questions" />

        <div className="mt-8 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            const isVisible = showAll || i < 5

            return (
              <div
                key={item.q}
                className={cn(
                  "glass overflow-hidden rounded-2xl",
                  !isVisible && "hidden",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium tracking-tight">{item.q}</span>
                  <Plus
                    className={cn(
                      "size-5 shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowAll((current) => !current)}
            className="rounded-full border-primary/30 bg-background/80 px-5 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-primary hover:border-primary/50 hover:bg-primary/5"
          >
            {showAll ? "Show Less" : "View All Questions"}
          </Button>
        </div>
      </div>
    </section>
  )
}
