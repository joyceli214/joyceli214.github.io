import type { AnchorHTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface GlowButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  emphasis?: 'primary' | 'secondary'
}

export function GlowButton({
  className,
  emphasis = 'primary',
  children,
  ...props
}: GlowButtonProps) {
  return (
    <a
      className={clsx(
        'inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700',
        emphasis === 'primary'
          ? 'border border-slate-900 bg-slate-900 text-white shadow-[0_14px_36px_-18px_rgba(15,23,42,0.95)] hover:-translate-y-0.5 hover:bg-slate-800'
          : 'border border-slate-300 bg-white/80 text-slate-800 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
