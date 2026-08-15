import { SectionHeading } from "./section-heading"

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Docker",
  "Supabase",
  "Prisma",
  "AWS",
  "Azure",
  "Google Cloud",
  "OpenAI",
  "Anthropic",
  "GitHub Actions",
  "PostgreSQL",
  "Vercel",
  "Cloudflare",
  "Tailwind CSS",
  "Git",
]

export function Technology() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="TECHNOLOGY" title="Built on modern technology." />
        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {tech.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <span className="rounded-full border border-border/60 bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
