import { ShieldCheck, Cpu, Bot, Smartphone, Lock, MessageSquareMore, Handshake, TrendingUp } from "lucide-react"

const points = [
  { icon: ShieldCheck, label: "Senior engineering approach" },
  { icon: Cpu, label: "Modern scalable architecture" },
  { icon: Bot, label: "AI-first development" },
  { icon: Smartphone, label: "Mobile-first experiences" },
  { icon: Lock, label: "Security-conscious engineering" },
  { icon: MessageSquareMore, label: "Transparent communication" },
  { icon: Handshake, label: "Long-term technical partnership" },
  { icon: TrendingUp, label: "Built for future growth" },
]

export function TrustCredibility() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80">Why Businesses Choose Us</p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
            The confidence to scale with clarity.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((item) => (
            <div key={item.label} className="glass rounded-2xl p-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-3">
                <item.icon className="size-4 text-primary" />
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
