import { Mail, MapPin, Phone } from "lucide-react"

const columns = [
  {
    title: "Company",
    links: ["About", "Process", "Careers", "Contact"],
  },
  {
    title: "Services",
    links: ["Website Design", "Development", "Mobile Apps", "AI Automation"],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_repeat(2,minmax(0,1fr))] md:items-start">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Lowveld Hub home">
              <span className="relative flex size-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-[linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.95))] shadow-[0_14px_34px_-18px_rgba(15,23,42,0.5)] backdrop-blur-sm">
                <span className="absolute inset-[2px] rounded-[13px] border border-slate-900/5" />
                <svg viewBox="0 0 64 64" className="relative size-7 text-slate-900" aria-hidden="true">
                  <rect x="14" y="14" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  <path d="M24 22v20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M24 22h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M34 22v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M34 32h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M42 22v20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-base font-semibold tracking-tight">
                Lowveld<span className="ml-1 text-primary">Hub</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A premium digital studio building serious products for ambitious businesses.
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
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
          <p className="text-xs text-muted-foreground">Designed and built by Lowveld Hub, South Africa.</p>
        </div>
      </div>
    </footer>
  )
}
