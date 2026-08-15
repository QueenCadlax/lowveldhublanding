import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

function DigitalProductsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="6" height="6" rx="1.2" />
      <rect x="11" y="5" width="9.5" height="4.2" rx="1.2" />
      <rect x="11" y="10.8" width="4.8" height="8.2" rx="1.2" />
      <rect x="17.2" y="10.8" width="3.3" height="8.2" rx="1.2" />
    </svg>
  )
}

function AppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <circle cx="12" cy="18" r="0.8" />
    </svg>
  )
}

function CustomSoftwareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7v10a2 2 0 0 0 2 2h14V5H5a2 2 0 0 0-2 2z" />
      <path d="M8 12h8" />
    </svg>
  )
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l7 4v6c0 5-3.8 9-7 10-3.2-1-7-5-7-10V6l7-4z" />
      <path d="M9.5 11.5c.6 1 1.9 1 2.5 0" />
    </svg>
  )
}

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6.5" cy="7" r="1.6" />
      <circle cx="17.5" cy="7" r="1.6" />
      <circle cx="12" cy="16.5" r="1.6" />
      <path d="M8 8.3l3.2 5.3" />
      <path d="M16 8.3l-3.2 5.3" />
      <path d="M8.2 8.1h7.6" />
    </svg>
  )
}

function BusinessSystemsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="5.5" height="4.6" rx="1.1" />
      <rect x="15" y="5" width="5.5" height="4.6" rx="1.1" />
      <rect x="9.2" y="14.4" width="5.5" height="4.6" rx="1.1" />
      <path d="M9 7.2h6" />
      <path d="M6.5 9.7v2.8" />
      <path d="M17.7 9.7v2.8" />
      <path d="M11.9 14.4v-2.7" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 16.2h10.2a3.3 3.3 0 0 0 .2-6.6A4.8 4.8 0 0 0 7.8 7.3 4.1 4.1 0 0 0 7 16.2Z" />
      <path d="M12 8.5v7" />
      <path d="M9.2 11.6h5.7" />
      <path d="M9.2 14.3h3.5" />
    </svg>
  )
}

function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 18.5h16" />
      <path d="M7.5 15.5v-5" />
      <path d="M12 15.5V8.8" />
      <path d="M16.5 15.5V6.5" />
      <path d="M5.5 6.5h13" />
    </svg>
  )
}

function ManagedServicesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.8 6.5 6.2v4.6c0 3.6 1.8 5.8 5.5 7.6 3.7-1.8 5.5-4 5.5-7.6V6.2L12 3.8Z" />
      <path d="M9.8 12.1h4.4" />
      <path d="M12 9.8v4.6" />
      <path d="M14.9 9.2a3 3 0 1 0-5.8 0" />
    </svg>
  )
}

const services = [
  {
    icon: DigitalProductsIcon,
    title: "Website Development",
    desc: "High-performance websites and digital experiences focused on clarity, conversion and brand credibility.",
    href: "/services/website-development",
  },
  {
    icon: AppIcon,
    title: "App Development",
    desc: "Custom web and mobile applications built around your users, workflows and business model.",
    href: "/services/app-development",
  },
  {
    icon: CustomSoftwareIcon,
    title: "Custom Software",
    desc: "Purpose-built software for complex processes, customer platforms and unique business requirements.",
    href: "/services/custom-software",
  },
  {
    icon: AiIcon,
    title: "AI & Automation",
    desc: "AI-powered solutions and intelligent automation that reduce manual work and improve efficiency.",
    href: "/services/artificial-intelligence",
  },
  {
    icon: BusinessSystemsIcon,
    title: "Business Systems",
    desc: "CRM, ERP, portals, dashboards and internal platforms that connect your operations.",
    href: "/services/business-systems",
  },
  {
    icon: DataIcon,
    title: "Data & Intelligence",
    desc: "Data platforms, analytics and dashboards that turn business data into actionable insight.",
    href: "/services/data-analytics",
  },
  {
    icon: ManagedServicesIcon,
    title: "Managed Services",
    desc: "Ongoing technical support, maintenance and monitoring to keep systems secure and reliable.",
    href: "/services/managed-services",
  },
  {
    icon: CloudIcon,
    title: "Cloud & Infrastructure",
    desc: "Scalable cloud architecture, deployments, integrations and infrastructure built for reliability.",
    href: "/services/cloud",
  },
  {
    icon: SecurityIcon,
    title: "Cybersecurity & Data Protection",
    desc: "Security-focused architecture, access controls and data protection designed to safeguard critical business systems.",
    href: "/services/cybersecurity",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-5 sm:py-7">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="OUR SERVICES" title="Technology built around your business." className="max-w-full" />

        <div id="services-grid" className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className={cn(
                "group glass premium-card services-card relative block overflow-hidden rounded-xl p-3 sm:p-3.5 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col",
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                <s.icon />
              </div>
              <div className="mt-4 flex-1">
                <h3 className="text-sm font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-xs leading-snug text-muted-foreground overflow-hidden max-h-[4.8rem]">{s.desc}</p>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-gold/30 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
        <style>{`@media (max-width:320px){#services-grid{grid-template-columns:1fr!important}}`}</style>
      </div>
    </section>
  )
}
