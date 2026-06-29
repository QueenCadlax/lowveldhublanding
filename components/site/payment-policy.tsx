export function PaymentPolicy() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Payment policy</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="font-semibold text-foreground">Projects are confirmed once payment has been received.</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          This allows us to allocate dedicated time and resources to your build and begin work immediately.
        </p>
      </div>
    </section>
  )
}
