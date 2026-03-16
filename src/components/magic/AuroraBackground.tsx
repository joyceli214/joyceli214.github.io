import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface AuroraBackgroundProps {
  children: ReactNode
  className?: string
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45rem_30rem_at_15%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(45rem_30rem_at_85%_20%,rgba(56,189,248,0.1),transparent),radial-gradient(40rem_28rem_at_50%_100%,rgba(147,197,253,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background:linear-gradient(125deg,rgba(255,255,255,0.38),rgba(255,255,255,0.08)_40%,rgba(255,255,255,0.24))]" />
      {children}
    </div>
  )
}
