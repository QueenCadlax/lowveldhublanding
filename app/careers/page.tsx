"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Mail,
  MoveRight,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const opportunities = [
  {
    title: "Sales Representative",
    department: "Sales",
    type: "Full-time",
    description:
      "Build relationships with businesses, generate new opportunities and help organisations adopt modern technology solutions.",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    type: "Full-time / Contract",
    description:
      "Build modern websites, AI-powered applications and scalable business systems using modern technologies.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time / Contract",
    description:
      "Design premium digital experiences, user interfaces and design systems for web and mobile applications.",
  },
  {
    title: "AI & Automation Developer",
    department: "Artificial Intelligence",
    type: "Full-time / Contract",
    description:
      "Develop AI agents, chatbots, automation workflows and intelligent business solutions.",
  },
  {
    title: "Project Coordinator",
    department: "Operations",
    type: "Full-time",
    description:
      "Coordinate projects, communicate with clients and ensure every project is delivered successfully.",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time / Contract",
    description:
      "Help businesses grow through SEO, paid advertising, content marketing and digital strategy.",
  },
  {
    title: "Internship Programme",
    department: "Graduate Programme",
    type: "Internship",
    description:
      "Launch your career by working alongside experienced professionals on real software and AI projects.",
  },
]

const principles = [
  {
    title: "Build Real Products",
    text: "Work on AI, cloud platforms, automation, websites and enterprise software used by real businesses.",
    icon: Rocket,
  },
  {
    title: "Grow Your Career",
    text: "Learn modern technologies while solving challenging business problems alongside a growing team.",
    icon: GraduationCap,
  },
  {
    title: "Make An Impact",
    text: "Every solution you build helps organisations become smarter, faster and more efficient.",
    icon: HeartHandshake,
  },
]

const hiringSteps = [
  "Apply",
  "Initial Review",
  "Interview",
  "Assessment (where applicable)",
  "Offer",
]

const whyAtLH = [
  {
    title: "Innovation",
    text: "We embrace emerging technologies and continuously push the boundaries of what's possible.",
    icon: Sparkles,
  },
  {
    title: "Ownership",
    text: "Every team member has the opportunity to take initiative, solve problems and make a meaningful impact.",
    icon: ShieldCheck,
  },
  {
    title: "Growth",
    text: "We invest in learning, mentorship and continuous professional development.",
    icon: GraduationCap,
  },
]

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.18 },
  variants: fadeInUp,
  transition: { duration: 0.7, ease: "easeOut" },
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
      {children}
    </span>
  )
}

export default function CareersPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="aurora-shell" />
        <div className="grid-overlay" />
        <div className="neural-network hidden lg:block" />
        <div className="hero-particles hidden lg:block" aria-hidden="true">
          <span style={{ top: "18%", left: "14%", animationDelay: "0s" }} />
          <span style={{ top: "30%", left: "22%", animationDelay: "1.5s" }} />
          <span style={{ top: "44%", left: "18%", animationDelay: "2.5s" }} />
          <span style={{ top: "24%", left: "78%", animationDelay: "1.2s" }} />
          <span style={{ top: "55%", left: "74%", animationDelay: "3.1s" }} />
          <span style={{ top: "62%", left: "86%", animationDelay: "4.2s" }} />
        </div>
        <div className="cursor-light" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 p-6 glass-strong sm:p-8 lg:p-12">
            <div className="pointer-events-none absolute inset-0 opacity-35">
              <div className="absolute left-8 top-8 size-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute right-8 top-20 size-40 rounded-full bg-slate-400/15 blur-3xl" />
            </div>

            <motion.div {...motionProps} className="relative mx-auto max-w-4xl text-center">
              <SectionBadge>Careers</SectionBadge>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
                Build What&apos;s Next.
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                At Lowveld Hub, you&apos;ll help create premium websites, intelligent software and AI-powered solutions that solve real business challenges and shape the future of digital transformation.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href="#positions"
                  className="shine group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_12px_32px_-10px] hover:shadow-primary"
                >
                  View Open Positions
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:info@lowveldhub.co.za?subject=Careers%20Enquiry"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
                >
                  Contact Recruitment
                </a>
              </div>
            </motion.div>

            <motion.div
              {...motionProps}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
              className="relative mt-10 hidden lg:block"
            >
              <div className="mx-auto max-w-4xl">
                <div className="relative mx-auto flex h-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-border/60 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.82),_rgba(243,244,248,0.95))]">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-1/2 top-1/2 size-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
                    <div className="absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex size-24 items-center justify-center rounded-full border border-slate-900/25 bg-white/90 shadow-[0_14px_40px_-18px_rgba(15,23,42,0.45)]">
                      <Image
                        src="/logo lvh1.png"
                        alt="Lowveld Hub logo"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute left-10 top-14 rounded-full border border-border/60 bg-card/80 px-3 py-2 text-xs font-semibold text-muted-foreground">AI</div>
                  <div className="absolute right-10 top-16 rounded-full border border-border/60 bg-card/80 px-3 py-2 text-xs font-semibold text-muted-foreground">Cloud</div>
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-card/80 px-3 py-2 text-xs font-semibold text-muted-foreground">Software</div>
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-card/80 px-3 py-2 text-xs font-semibold text-muted-foreground">Data</div>
                  <div className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full border border-border/60 bg-card/80 px-3 py-2 text-xs font-semibold text-muted-foreground">Apps</div>
                  <div className="absolute bottom-10 right-12 rounded-full border border-border/60 bg-card/80 px-3 py-2 text-xs font-semibold text-muted-foreground">CRM</div>
                  <div className="absolute left-1/2 top-1/2 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-48 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
            <SectionBadge>Why Join Lowveld Hub</SectionBadge>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              More Than A Job
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  {...motionProps}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
                  className="glass premium-card rounded-3xl p-6"
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

      <section id="positions" className="py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
            <SectionBadge>Current Opportunities</SectionBadge>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Current Opportunities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We&apos;re looking for curious thinkers, talented builders and ambitious professionals who want to create technology that makes a real impact.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {opportunities.map((role, index) => (
              <motion.div
                key={role.title}
                {...motionProps}
                transition={{ duration: 0.65, delay: index * 0.04, ease: "easeOut" }}
                className="glass premium-card rounded-3xl p-5"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-border/60 bg-card/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {role.department}
                  </span>
                  <span className="rounded-full border border-border/60 bg-card/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {role.type}
                  </span>
                  <span className="rounded-full border border-border/60 bg-card/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Hiring
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.description}</p>
                <a
                  href={`mailto:info@lowveldhub.co.za?subject=${encodeURIComponent(`Application - ${role.title}`)}&body=${encodeURIComponent(`Hello Lowveld Hub Team,\n\nI would like to apply for the ${role.title} position.\n\nName:\nPhone Number:\nCurrent Location:\nLinkedIn Profile:\nPortfolio / GitHub (if applicable):\n\nPlease find my CV attached for your consideration.\n\nKind regards,`)}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:text-primary"
                >
                  Apply for this Role <ArrowRight className="size-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
            <SectionBadge>Our Hiring Process</SectionBadge>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Hiring Process
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {hiringSteps.map((step, index) => (
              <motion.div
                key={step}
                {...motionProps}
                transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                className="glass rounded-3xl p-4 text-center"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-border/60 bg-card/70 text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
            <SectionBadge>Our Engineering Culture</SectionBadge>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Engineering Culture
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We combine modern tooling, thoughtful delivery and a product mindset to build software that performs in the real world.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Modern Stack", items: ["React", "Next.js", "TypeScript", "Python"] },
              { title: "AI First", items: ["OpenAI", "Anthropic", "Automation"] },
              { title: "Cloud Native", items: ["AWS", "Azure", "Cloudflare", "Docker"] },
              { title: "Quality", items: ["Testing", "GitHub", "CI/CD", "Code Reviews"] },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                {...motionProps}
                transition={{ duration: 0.65, delay: index * 0.06, ease: "easeOut" }}
                className="glass premium-card rounded-3xl p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.items.map((chip) => (
                    <span key={chip} className="rounded-full border border-border/60 bg-card/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-10">
            <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
              <SectionBadge>Life At Lowveld Hub</SectionBadge>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Life At Lowveld Hub
              </h2>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {whyAtLH.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    {...motionProps}
                    transition={{ duration: 0.65, delay: index * 0.07, ease: "easeOut" }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div {...motionProps} className="glass rounded-[2rem] p-6 sm:p-8">
            <SectionBadge>How To Apply</SectionBadge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How To Apply
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We&apos;re always excited to hear from talented professionals who share our passion for technology and innovation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Please send the following to: <a className="font-semibold text-primary hover:underline" href="mailto:info@lowveldhub.co.za">info@lowveldhub.co.za</a>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Your CV (PDF)</li>
              <li>• Portfolio or GitHub (if applicable)</li>
              <li>• A short introduction about yourself</li>
              <li>• The position title as your email subject</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div {...motionProps} className="glass rounded-[2rem] p-6 sm:p-8">
            <SectionBadge>Our Culture</SectionBadge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Culture
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We believe exceptional technology is built by diverse teams with different perspectives. At Lowveld Hub, we&apos;re committed to creating an inclusive environment where talented people can do their best work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-10">
            <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready To Build What&apos;s Next?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Join us in building premium websites, intelligent software and AI solutions that empower businesses to grow with confidence.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href="#positions"
                  className="shine group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  Apply Today
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:info@lowveldhub.co.za"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
