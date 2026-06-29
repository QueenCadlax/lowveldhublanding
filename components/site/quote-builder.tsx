"use client"

import { useMemo, useState } from "react"
import { Check } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

type ProjectType = "Website" | "Mobile App"

const basePrice: Record<ProjectType, number> = {
  Website: 18000,
  "Mobile App": 45000,
}

const pageOptions = [
  { label: "1–5 pages", value: 5, add: 0 },
  { label: "6–10 pages", value: 10, add: 9000 },
  { label: "11–20 pages", value: 20, add: 22000 },
]

const featureOptions = [
  { label: "AI Automation", add: 16000 },
  { label: "Payments", add: 8000 },
  { label: "Booking System", add: 7000 },
  { label: "Custom CMS", add: 11000 },
  { label: "User Accounts", add: 9000 },
  { label: "SEO Package", add: 6000 },
]

const rand = "R"

export function QuoteBuilder() {
  const [type, setType] = useState<ProjectType>("Website")
  const [pages, setPages] = useState(pageOptions[0])
  const [features, setFeatures] = useState<string[]>(["AI Automation"])

  const total = useMemo(() => {
    const featureTotal = featureOptions
      .filter((f) => features.includes(f.label))
      .reduce((sum, f) => sum + f.add, 0)
    return basePrice[type] + pages.add + featureTotal
  }, [type, pages, features])

  const toggleFeature = (label: string) =>
    setFeatures((prev) => (prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]))

  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute right-10 top-10 size-72 rounded-full bg-gold/20" />
        <div className="blob absolute -left-10 bottom-10 size-72 rounded-full bg-primary/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Instant estimate"
          title="Build your quote in seconds"
          description="Get a transparent ballpark for your project. Final pricing is confirmed after a quick discovery call."
        />

        <div className="glass-strong mt-8 grid grid-cols-1 gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-semibold">Project type</p>
              <div className="flex gap-3">
                {(["Website", "Mobile App"] as ProjectType[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    className={cn(
                      "flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-all",
                      type === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card/50 text-muted-foreground hover:border-primary/40",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold">Size</p>
              <div className="grid grid-cols-3 gap-3">
                {pageOptions.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setPages(p)}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-sm font-medium transition-all",
                      pages.label === p.label
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card/50 text-muted-foreground hover:border-primary/40",
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold">Features</p>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {featureOptions.map((f) => {
                  const active = features.includes(f.label)
                  return (
                    <button
                      key={f.label}
                      type="button"
                      onClick={() => toggleFeature(f.label)}
                      className={cn(
                        "flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all",
                        active
                          ? "border-primary/40 bg-accent text-foreground"
                          : "border-border bg-card/50 text-muted-foreground hover:border-primary/40",
                      )}
                    >
                      <span>{f.label}</span>
                      <span
                        className={cn(
                          "flex size-5 items-center justify-center rounded-md border",
                          active ? "border-primary bg-primary text-primary-foreground" : "border-border",
                        )}
                      >
                        {active && <Check className="size-3.5" />}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Live total */}
          <div className="glass flex flex-col justify-between rounded-2xl p-6">
            <div>
              <p className="text-sm text-muted-foreground">Estimated investment</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight tabular-nums">
                {rand}
                {total.toLocaleString("en-ZA")}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Once-off · excl. VAT</p>

              <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                <Row label={`${type} base`} value={`${rand}${basePrice[type].toLocaleString("en-ZA")}`} />
                <Row label={pages.label} value={pages.add ? `+${rand}${pages.add.toLocaleString("en-ZA")}` : "Included"} />
                <Row
                  label={`${features.length} feature${features.length === 1 ? "" : "s"}`}
                  value={
                    features.length
                      ? `+${rand}${featureOptions
                          .filter((f) => features.includes(f.label))
                          .reduce((s, f) => s + f.add, 0)
                          .toLocaleString("en-ZA")}`
                      : "None"
                  }
                />
              </div>
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Request this quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium tabular-nums">{value}</span>
    </div>
  )
}
