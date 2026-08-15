"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Bot,
  CircleCheckBig,
  Clock3,
  CloudCog,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
  Workflow,
} from "lucide-react"
import { Footer } from "@/components/site/footer"
import { Faq } from "@/components/site/faq"
import { Navbar } from "@/components/site/navbar"
import { SectionHeading } from "@/components/site/section-heading"

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.18 },
  variants: fadeInUp,
  transition: { duration: 0.7, ease: "easeOut" },
}

const contactMethods = [
  {
    title: "Email",
    value: "info@lowveldhub.co.za",
    detail: "Typical response time within 24 hours.",
    icon: Mail,
    href: "mailto:info@lowveldhub.co.za",
  },
  {
    title: "WhatsApp",
    value: "+27 67 374 9762",
    detail: "Quick questions and consultations.",
    icon: MessageCircle,
    href: "https://wa.me/27673749762?text=Hi%20Lowveld%20Hub!%20I’d%20like%20to%20discuss%20my%20project.",
  },
  {
    title: "Based In",
    value: "Mpumalanga, South Africa",
    detail: "Serving clients worldwide.",
    icon: MapPin,
    href: "/contact",
  },
  {
    title: "Working Hours",
    value: "Monday – Friday",
    detail: "08:00 – 17:00 SAST",
    icon: Clock3,
    href: "/contact",
  },
]

const services = [
  {
    title: "Website Design & Development",
    description: "Premium, conversion-led websites that feel polished and perform beautifully.",
    href: "/website-development",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile Applications",
    description: "Modern apps designed for exceptional user experience and growth.",
    href: "/mobile-app-development",
    icon: Sparkles,
  },
  {
    title: "AI Solutions & Automation",
    description: "Automation, intelligent workflows and AI experiences that save time and unlock value.",
    href: "/ai-automation",
    icon: Bot,
  },
  {
    title: "Custom Software",
    description: "Purpose-built systems for operations, CRM, internal tools and digital products.",
    href: "/custom-software",
    icon: Workflow,
  },
  {
    title: "Cloud Infrastructure",
    description: "Reliable hosting, performance, security and platform support for modern products.",
    href: "/hosting-maintenance",
    icon: CloudCog,
  },
  {
    title: "Business Intelligence",
    description: "Insightful digital experiences backed by analytics, strategy and measurable growth.",
    href: "/seo",
    icon: BarChart3,
  },
]

const reasons = [
  {
    title: "Clear Communication",
    text: "No jargon. No confusion. Just clear guidance and thoughtful recommendations.",
    icon: CircleCheckBig,
  },
  {
    title: "Transparent Pricing",
    text: "Clear proposals, realistic timelines and a confident path to delivery.",
    icon: CircleCheckBig,
  },
  {
    title: "Long-Term Partnership",
    text: "We build relationships, not just projects, and stay close long after launch.",
    icon: CircleCheckBig,
  },
]

const processSteps = [
  { step: "01", title: "Reach Out", text: "Tell us about your project, challenge or opportunity." },
  { step: "02", title: "Discovery Call", text: "We’ll explore your goals and map the right solution." },
  { step: "03", title: "Proposal", text: "You’ll receive a clear scope, timeline and investment overview." },
  { step: "04", title: "Build", text: "We design, develop and launch with ongoing communication." },
]

export function ContactPageContent() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      <section id="top" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:py-28">
        <div className="aurora-shell" />
        <div className="grid-overlay" />
        <div className="cursor-light" />

        <div className="mx-auto max-w-6xl">
          <motion.div {...motionProps} className="mx-auto max-w-4xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
              Contact Lowveld Hub
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something Exceptional.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Share your goals, timeline and budget, and we&apos;ll help you move from idea to the right digital solution with clarity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:info@lowveldhub.co.za?subject=Project%20Inquiry"
                className="shine group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Request a Proposal
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:info@lowveldhub.co.za?subject=Strategy%20Call%20Request"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
              >
                Book a Strategy Call
              </a>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div {...motionProps} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="glass rounded-[2rem] p-6 sm:p-8">
              <SectionHeading
                eyebrow="Start a Conversation"
                title="Connecting with us is simple"
                description="We’ll help you clarify the right path forward, whether you’re launching a new product or modernising an existing experience."
                align="left"
                className="max-w-none"
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {contactMethods.map((item) => {
                  const Icon = item.icon
                  return (
                    <a key={item.title} href={item.href} className="rounded-2xl border border-border/60 bg-card/70 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_30px_-16px_rgba(59,130,246,0.35)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-primary">
                        <Icon className="size-4" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm font-medium text-primary">{item.value}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div {...motionProps} transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }} className="glass rounded-[2rem] p-6 sm:p-8">
              <SectionHeading
                eyebrow="Tell Us About Your Project"
                title="The fastest way to begin"
                description="Send us a short overview and we’ll follow up with the right next step."
                align="left"
                className="max-w-none"
              />

              <div className="mt-8 rounded-[1.5rem] border border-border/60 bg-card/70 p-5">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Please send your business name, the problem you&apos;re solving, your timeline and any references or current website links.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Business name",
                    "What you want to build",
                    "Timeline",
                    "Budget (optional)",
                    "Existing website",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href="mailto:info@lowveldhub.co.za"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  Email Us
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
            <SectionHeading eyebrow="Our Services" title="Services built for ambitious businesses" description="From polished websites to intelligent automation, we design, build and support experiences that move your business forward." />
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  {...motionProps}
                  transition={{ duration: 0.65, delay: index * 0.04, ease: "easeOut" }}
                  className="glass premium-card rounded-[1.6rem] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <Link href={service.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="size-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
            <SectionHeading eyebrow="Why Businesses Contact Us" title="A more confident way to begin" description="We make it easy to move from idea to execution without unnecessary friction." />
          </motion.div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {reasons.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  {...motionProps}
                  transition={{ duration: 0.65, delay: index * 0.06, ease: "easeOut" }}
                  className="glass rounded-[1.6rem] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
            <SectionHeading eyebrow="What Happens Next?" title="A clear path from first conversation to launch" description="We keep the process simple, structured and transparent so you always know what comes next." />
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                {...motionProps}
                transition={{ duration: 0.65, delay: index * 0.05, ease: "easeOut" }}
                className="glass rounded-[1.6rem] p-6"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div {...motionProps} className="rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80">Ready To Build</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready To Build What&apos;s Next?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Let&apos;s create technology that moves your business forward.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href="mailto:info@lowveldhub.co.za" className="shine group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110">
                  Start Your Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="mailto:info@lowveldhub.co.za?subject=Strategy%20Call%20Request" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5">
                  Book Strategy Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
