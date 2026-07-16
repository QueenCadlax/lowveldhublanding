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
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-8 text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
