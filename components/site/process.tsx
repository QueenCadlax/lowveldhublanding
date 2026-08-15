import React from "react"

export function Process() {
  const steps = [
    { id: "01", title: "Discovery", text: "Understand the business, goals and requirements." },
    { id: "02", title: "Planning", text: "Define scope, timeline and technical approach." },
    { id: "03", title: "Design", text: "Create the visual direction and user experience." },
    { id: "04", title: "Development", text: "Build, test and refine the solution." },
    { id: "05", title: "Launch & Support", text: "Launch confidently, then keep improving." },
  ]

  return (
    <section id="process" className="relative overflow-hidden py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">OUR PROCESS</p>
          <h2 className="mt-3 text-2xl font-semibold">From idea to launch.</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group flex flex-col items-start gap-3 rounded-xl border border-border/60 bg-background p-5 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-white text-xl font-semibold text-primary shadow-sm">
                {step.id}
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
