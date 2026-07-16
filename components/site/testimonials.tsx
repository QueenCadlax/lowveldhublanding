"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Lowveld Hub delivered a platform that looks and feels like it belongs to a company ten times our size. The attention to detail is unreal.",
    name: "Thabo Nkosi",
    company: "BlueSky Financial",
  },
  {
    quote:
      "From the first call they understood exactly what we needed. Fast, premium and genuinely invested in our growth.",
    name: "Lerato Mahlangu",
    company: "Marula Group",
  },
  {
    quote:
      "The AI automation they built saves my team over ten hours a week. Best investment we've made in years.",
    name: "Dewald van Zyl",
    company: "Sabie Labs",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Testimonials" title="Clients who'd happily recommend us" />

        <div className="glass-strong mt-12 rounded-3xl p-8 sm:p-12">
          <div className="flex gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 text-balance text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
            “{t.quote}”
          </blockquote>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.company}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-primary" : "w-1.5 bg-border",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
