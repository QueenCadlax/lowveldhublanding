import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Digital Products", href: "/website-development" },
      { label: "AI Solutions", href: "/ai-automation" },
      { label: "Business Systems", href: "/custom-software" },
      { label: "Managed Services", href: "/hosting-maintenance" },
      { label: "Cloud Solutions", href: "/hosting-maintenance" },
      { label: "Data Analytics", href: "/seo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/#work" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Insights • Launching Soon", href: "/" },
    ],
  },
  {
    title: "Products",
    links: [{ label: "Discover • Launching Soon", href: "/discover" }],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_repeat(2,minmax(0,1fr))] md:items-start">
          <div>
            <a href="/" className="flex items-center gap-3" aria-label="Lowveld Hub home">
              <span className="relative flex size-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-[linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.95))] shadow-[0_14px_34px_-18px_rgba(15,23,42,0.5)] backdrop-blur-sm">
                <span className="absolute inset-[2px] rounded-[13px] border border-slate-900/5" />
                <Image
                  src="/logo lvh1.png"
                  alt="Lowveld Hub logo"
                  width={40}
                  height={40}
                  className="relative size-7 object-contain"
                />
              </span>
              <span className="text-base font-semibold tracking-tight">
                Lowveld<span className="ml-1 text-primary">Hub</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Engineering premium digital solutions that move businesses forward.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <a href="mailto:info@lowveldhub.co.za" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="size-4 text-primary" /> info@lowveldhub.co.za
              </a>
              <a href="https://wa.me/27673749762?text=Hi%20Lowveld%20Hub!%20I'm%20interested%20in%20your%20digital%20services.%20I'd%20like%20to%20discuss%20my%20project." target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Phone className="size-4 text-primary" /> +27 67 374 9762
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Based in Mpumalanga, South Africa
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lowveld Hub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Building premium software that helps businesses grow.</p>
        </div>
      </div>
    </footer>
  )
}
