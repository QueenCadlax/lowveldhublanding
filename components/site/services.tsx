import {
  Palette,
  Code2,
  Smartphone,
  Boxes,
  Bot,
  Search,
  Sparkles,
  ServerCog,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Palette,
    title: "Website Design",
    desc: "Pixel-perfect, conversion-focused interfaces with a premium feel.",
    featured: true,
    href: "/web-design",
  },
  {
    icon: Code2,
    title: "Website Development",
    desc: "Fast, scalable builds on modern frameworks built to last.",
    featured: true,
    href: "/website-development",
  },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-quality iOS & Android experiences your users love.", href: "/mobile-app-development" },
  { icon: Boxes, title: "Custom Software", desc: "Tailored platforms and tools that fit your exact workflow.", href: "/custom-software" },
  { icon: Bot, title: "AI Automation", desc: "Smart agents and automations that save hours every week.", href: "/ai-automation" },
  { icon: Search, title: "SEO", desc: "Technical and content SEO that lifts you up the rankings.", href: "/seo" },
  { icon: Sparkles, title: "Branding", desc: "Identity systems that make you look established and trusted.", href: "/branding" },
  { icon: ServerCog, title: "Hosting & Maintenance", desc: "Reliable hosting with proactive, long-term support.", href: "/hosting-maintenance" },
]

export function Services() {
  return (
    <section id="services" className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="What we do" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className={cn(
                "group glass relative block overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1",
                s.featured && "ring-1 ring-primary/20",
              )}
            >
              <div
                className={cn(
                  "flex size-8 items-center justify-center rounded-lg transition-colors",
                  s.featured ? "bg-primary text-primary-foreground" : "bg-accent text-primary",
                )}
              >
                <s.icon className="size-3.5" />
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {/* hover glow edge */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-gold/30 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
