import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: "center" | "left"
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-3">
          <span className="gold-rule w-5 rounded-full opacity-75" />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
        </div>
      )}
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-2 text-pretty text-sm leading-7 text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
