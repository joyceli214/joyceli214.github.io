import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  FolderKanban,
  Mail,
  MessageSquare,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { AuroraBackground } from './components/magic/AuroraBackground'
import { GlassCard } from './components/magic/GlassCard'
import { GlowButton } from './components/reactbits/GlowButton'
import { TimelineRail } from './components/reactbits/TimelineRail'
import { SectionHeading } from './components/ui/SectionHeading'
import { TechBadge } from './components/ui/TechBadge'
import { portfolioData } from './data/portfolio'

const sectionClass = 'mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20'

function App() {
  const shouldReduceMotion = useReducedMotion()
  const { profile, impactStats, experience, projects, skills, education, languages } = portfolioData

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55, ease: 'easeOut' as const },
  }

  return (
    <AuroraBackground className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <div className="liquid-orb liquid-orb-a" aria-hidden />
      <div className="liquid-orb liquid-orb-b" aria-hidden />

      <header className="sticky top-4 z-50 mx-auto mt-4 w-[min(68rem,calc(100%-1.5rem))] rounded-full border border-white/60 bg-white/62 px-4 py-2.5 shadow-[0_12px_42px_-25px_rgba(15,23,42,0.9)] backdrop-blur-xl">
        <nav className="flex items-center justify-between" aria-label="Primary navigation">
          <a href="#top" className="text-sm font-semibold tracking-[0.01em] text-slate-950">
            Joyce Li
          </a>
          <ul className="flex items-center gap-1 text-xs font-medium text-slate-600 md:gap-4 md:text-sm">
            {['Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  className="rounded-full px-3 py-1 transition-colors hover:bg-white/80 hover:text-slate-900"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="pb-16 pt-8">
        <section className={sectionClass}>
          <motion.div {...fadeUp}>
            <GlassCard className="hero-shell p-8 md:p-11">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-blue-700">
                <Sparkles className="h-3.5 w-3.5" />
                {profile.role}
              </div>
              <h1 className="mt-4 max-w-[18ch] text-4xl font-semibold leading-[1.02] text-slate-950 md:text-7xl">
                I build AI-native products that are practical to run in production.
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-lg">
                {profile.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                <span>{profile.location}</span>
                <span>{profile.availability}</span>
                <a className="font-medium text-slate-800 hover:text-blue-700" href={profile.contacts[2].href}>
                  {profile.contacts[2].value}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <GlowButton href={profile.contacts[0].href}>
                  <Mail className="me-2 h-4 w-4" />
                  Email Joyce
                </GlowButton>
                <GlowButton
                  href={profile.contacts[1].href}
                  target="_blank"
                  rel="noreferrer"
                  emphasis="secondary"
                >
                  LinkedIn
                  <ArrowUpRight className="ms-2 h-4 w-4" />
                </GlowButton>
                <GlowButton
                  href="CV Joyce Li.pdf"
                  target="_blank"
                  rel="noreferrer"
                  emphasis="secondary"
                >
                  <Download className="me-2 h-4 w-4" />
                  Resume
                </GlowButton>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <section className={sectionClass}>
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Impact"
              title="Results I can point to"
              description="Numbers that came from shipping and maintaining real systems, not just proofs of concept."
            />
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              >
                <GlassCard className="relative p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-blue-100/35" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-5xl font-semibold tracking-tight text-slate-950">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{stat.context}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className={sectionClass}>
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Experience"
              title="What I have worked on"
              description="Most of my work has focused on reliability, modernization, and product delivery under enterprise constraints."
            />
          </motion.div>
          <motion.div {...fadeUp}>
            <TimelineRail items={experience} />
          </motion.div>
        </section>

        <section id="projects" className={sectionClass}>
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Projects"
              title="Selected projects"
              description="A few examples that show how I approach applied AI, healthcare data, and production systems."
            />
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              >
                <GlassCard className="h-full p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-blue-700">
                    {project.status}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-950">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{project.impact}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechBadge key={`${project.name}-${tech}`} label={tech} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className={sectionClass}>
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Skills"
              title="How I contribute"
              description="I can move across frontend, backend, and cloud without losing sight of delivery quality."
            />
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((group, index) => {
              const Icon =
                index === 0
                  ? FolderKanban
                  : index === 1
                    ? BriefcaseBusiness
                    : index === 2
                      ? Wrench
                      : MessageSquare

              return (
                <motion.div
                  key={group.title}
                  {...fadeUp}
                  transition={{
                    ...fadeUp.transition,
                    delay: shouldReduceMotion ? 0 : index * 0.07,
                  }}
                >
                  <GlassCard className="h-full p-6">
                    <h3 className="inline-flex items-center gap-2 text-xl font-semibold text-slate-900">
                      <Icon className="h-5 w-5 text-blue-700" />
                      {group.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <TechBadge key={`${group.title}-${item}`} label={item} />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid gap-5 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <GlassCard className="h-full">
                <SectionHeading
                  eyebrow="Education"
                  title="Background"
                  description="My degree combined engineering and business, which shaped how I work with both product and technical teams."
                />
                {education.map((entry) => (
                  <div key={entry.institution}>
                    <h3 className="text-lg font-semibold text-slate-900">{entry.institution}</h3>
                    <p className="mt-1 text-sm text-slate-700">{entry.program}</p>
                    <p className="mt-1 text-sm text-slate-700">{entry.details}</p>
                  </div>
                ))}
              </GlassCard>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
              <GlassCard className="h-full">
                <SectionHeading
                  eyebrow="Languages"
                  title="Communication"
                  description="I work comfortably with multilingual teams and cross-region stakeholders."
                />
                <ul className="space-y-3 text-sm text-slate-700">
                  {languages.map((language) => (
                    <li
                      key={language}
                      className="rounded-xl border border-slate-300/80 bg-white/82 px-3 py-2 font-medium"
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        <section id="contact" className={sectionClass}>
          <motion.div {...fadeUp}>
            <GlassCard className="relative overflow-hidden p-8 text-center md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_15rem_at_50%_100%,rgba(56,189,248,0.22),transparent)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
                  If this looks relevant, feel free to reach out.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-700 md:text-base">
                  I am happy to chat about full-stack, platform, or AI-native product roles.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  {profile.contacts.map((contact) => (
                    <GlowButton
                      key={contact.label}
                      href={contact.href}
                      emphasis={contact.label === 'Email' ? 'primary' : 'secondary'}
                      target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                      rel={contact.label === 'LinkedIn' ? 'noreferrer' : undefined}
                    >
                      {contact.label}: {contact.value}
                    </GlowButton>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>
      </main>
    </AuroraBackground>
  )
}

export default App
