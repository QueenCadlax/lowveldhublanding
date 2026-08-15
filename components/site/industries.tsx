import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Leaf,
  Scale,
  Shield,
  Store,
  Truck,
  Users,
} from "lucide-react"

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance", icon: Landmark },
  { name: "Real Estate", icon: Building2 },
  { name: "Retail", icon: Store },
  { name: "Hospitality", icon: Hotel },
  { name: "Construction", icon: Factory },
  { name: "Manufacturing", icon: Factory },
  { name: "Agriculture", icon: Leaf },
  { name: "Education", icon: GraduationCap },
  { name: "Government", icon: Shield },
  { name: "Professional Services", icon: BriefcaseBusiness },
  { name: "NGOs", icon: BadgeCheck },
  { name: "Logistics", icon: Truck },
  { name: "Startups", icon: Users },
]

export function Industries() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">INDUSTRIES</p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">Built across industries.</h2>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm text-muted-foreground"
            >
              <Icon className="size-4 text-foreground/80" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
