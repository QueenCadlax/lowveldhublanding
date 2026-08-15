import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Discover by Lowveld Hub",
  description: "A curated platform connecting customers with trusted businesses across South Africa.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/40 p-8 text-center shadow-sm sm:p-12">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80">Discover</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Discover by Lowveld Hub
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A curated platform connecting customers with trusted businesses across South Africa.
          <br />
          Currently under development.
        </p>
        <div className="mt-8 inline-flex rounded-full border border-border/60 px-5 py-2 text-sm font-semibold text-muted-foreground">
          Launching Soon
        </div>
      </div>
    </main>
  )
}
