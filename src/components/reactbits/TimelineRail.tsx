import { ArrowUpRight } from 'lucide-react'
import type { ExperienceItem } from '../../types/portfolio'
import { GlassCard } from '../magic/GlassCard'
import { TechBadge } from '../ui/TechBadge'

interface TimelineRailProps {
  items: ExperienceItem[]
}

export function TimelineRail({ items }: TimelineRailProps) {
  return (
    <ol className="relative space-y-5 border-s border-slate-300/70 ps-5">
      {items.map((item) => (
        <li key={`${item.company}-${item.period}`} className="relative">
          <span className="absolute -start-[1.58rem] top-8 h-3.5 w-3.5 rounded-full border border-blue-300 bg-white shadow-sm" />
          <GlassCard>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
              {item.period}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(item.companyUrl)}&sz=64`}
                alt={`${item.company} icon`}
                className="h-4 w-4 rounded-sm"
                loading="lazy"
              />
              <span>{item.company}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </GlassCard>
        </li>
      ))}
    </ol>
  )
}
