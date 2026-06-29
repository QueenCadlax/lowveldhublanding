import { SectionHeading } from "./section-heading"

const tech = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel", "Cloudflare", "OpenAI", "Tailwind CSS", "Git"]

export function Technology() {
  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:justify-start">
          <span className="text-primary">React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>Vercel</span>
          <span>Cloudflare</span>
          <span>OpenAI</span>
          <span>Tailwind CSS</span>
          <span>Git</span>
        </div>
      </div>
    </section>
  )
}
