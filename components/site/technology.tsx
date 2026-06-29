import { SectionHeading } from "./section-heading"

const tech = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel", "Cloudflare", "OpenAI", "Tailwind CSS", "Git"]

export function Technology() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our stack" title="Built using industry-leading technologies" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          We use modern, scalable technologies to build fast, secure, and production-ready digital systems.
        </p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-5">
          {tech.map((t) => (
            <div
              key={t}
              className="glass flex items-center justify-center rounded-2xl border border-border/60 px-4 py-5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
