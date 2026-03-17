import { motion, useReducedMotion } from 'framer-motion'
import {
  BriefcaseBusiness,
  FolderKanban,
  Github,
  Globe,
  Mail,
  MessageSquare,
  Wrench,
} from 'lucide-react'
import proudCoder from './assets/undraw_proud-coder_bivp.svg'
import FloatingLines from './components/reactbits/FloatingLines'
import { GlassCard } from './components/magic/GlassCard'
import { GlowButton } from './components/reactbits/GlowButton'
import { TimelineRail } from './components/reactbits/TimelineRail'
import { SectionHeading } from './components/ui/SectionHeading'
import { TechBadge } from './components/ui/TechBadge'
import { portfolioData } from './data/portfolio'

const sectionClass = 'mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20'

function App() {
  const shouldReduceMotion = useReducedMotion()
  const { profile, experience, projects, skills, education, languages } = portfolioData

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55, ease: 'easeOut' as const },
  }

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="side-patch side-patch-left" />
        <div className="side-patch side-patch-right" />
      </div>
      <header className="fixed left-1/2 top-4 z-50 w-fit max-w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-full border border-slate-300/95 bg-white/88 px-4 py-2.5 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.95)] backdrop-blur-xl md:px-6 md:py-3">
        <nav className="flex items-center justify-center" aria-label="Primary navigation">
          <ul className="flex items-center gap-2 text-xs font-medium text-slate-700 md:gap-6 md:text-sm">
            {['Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-white/90 hover:text-slate-950"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="relative z-10 pb-16">
        <section className="relative w-full">
          <motion.div {...fadeUp}>
            <div className="relative isolate flex min-h-[100svh] items-center">
              <div
                className="pointer-events-none absolute left-1/2 top-0 z-0 h-[132svh] w-screen -translate-x-1/2"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 62%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 0%, black 62%, transparent 100%)',
                }}
              >
                <FloatingLines
                  enabledWaves={['top', 'middle', 'bottom']}
                  lineCount={[4, 5, 4]}
                  lineDistance={[6, 6, 6]}
                  bendRadius={4.5}
                  bendStrength={-0.18}
                  interactive
                  parallax
                  parallaxStrength={0.06}
                  animationSpeed={0.62}
                  linesGradient={['#9bbdff', '#7fa8f0', '#6f95dc']}
                  mixBlendMode="normal"
                />
              </div>
              <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pt-24 pb-10 md:grid-cols-[1.08fr_0.92fr] md:gap-24 md:px-8 md:pt-28 md:pb-14 lg:max-w-7xl xl:max-w-[82rem] xl:gap-28 xl:px-10 2xl:max-w-[90rem] 2xl:gap-32">
                <div className="max-w-2xl xl:max-w-[42rem]">
                  <h1 className="text-4xl font-semibold leading-[1.02] text-slate-950 md:text-7xl">
                    Hi, I&apos;m Joyce
                  </h1>
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-lg">
                    {profile.summary}
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm md:max-w-none">
                  <img
                    src={proudCoder}
                    alt="Illustration of Joyce coding"
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
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
              description="A few examples of what I have built and shipped."
            />
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => {
              const currentImage = project.images[0]

              return (
                <motion.div
                  key={project.name}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                >
                  <GlassCard className="h-full p-6">
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-950">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.description}</p>

                    <div className="relative mt-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50">
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <ul className="mt-4 list-disc space-y-2 ps-5 text-sm text-slate-700">
                      {project.highlights.map((highlight) => (
                        <li key={`${project.name}-${highlight}`}>{highlight}</li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          key={`${project.name}-${link.href}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/85 px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
                        >
                          {link.type === 'github' ? (
                            <Github className="h-3.5 w-3.5" />
                          ) : (
                            <Globe className="h-3.5 w-3.5" />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechBadge key={`${project.name}-${tech}`} label={tech} />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
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
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
                  I&apos;m happy to chat about any opportunities.
                </h2>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  {profile.contacts.map((contact) => (
                    <GlowButton
                      key={contact.label}
                      href={contact.href}
                      emphasis={contact.label === 'Email' ? 'primary' : 'secondary'}
                      target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                      rel={contact.label === 'LinkedIn' ? 'noreferrer' : undefined}
                    >
                      {contact.label === 'Email' ? <Mail className="me-2 h-4 w-4" /> : null}
                      {contact.label}: {contact.value}
                    </GlowButton>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-600">
                  Illustrations by{' '}
                  <a
                    href="https://undraw.co/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-700 underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
                  >
                    unDraw
                  </a>
                  .
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
