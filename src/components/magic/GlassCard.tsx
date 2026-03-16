import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <article
      className={clsx(
        'group relative overflow-hidden rounded-3xl border border-white/45 bg-white/64 p-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.6)] backdrop-blur-2xl transition duration-300 hover:border-white/70 hover:bg-white/74',
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      {children}
    </article>
  )
}
