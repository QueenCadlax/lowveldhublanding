"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most small builds launch in 1–2 weeks. Larger apps and custom systems take longer, and we’ll confirm the timeline clearly before we begin.",
  },
  {
    q: "What do you charge?",
    a: "Projects are priced based on scope and requirements. Simple builds start from R5,000+, with final pricing confirmed after we understand your project.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer optional maintenance, updates, and long-term support depending on your needs.",
  },
  {
    q: "Can you redesign my existing site?",
    a: "Yes. We can modernise your current website, improve performance, and upgrade the design and user experience.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Answers to common questions" />


        <div className="mt-8 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="glass overflow-hidden rounded-2xl">
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
      </div>
    </section>
  )
}
