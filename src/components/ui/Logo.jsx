import { site } from '@/config/site'
import { cn } from '@/utils/cn'

/** Monochrome mark + wordmark. Inherits the text color of its parent. */
export default function Logo({ className }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 28 28" className="size-7" fill="none" aria-hidden="true">
        <path d="M3 25V12h8V3h14v22z" stroke="currentColor" strokeWidth="2.25" strokeLinejoin="round" />
        <path d="M11 25V12" stroke="currentColor" strokeWidth="2.25" />
        <path d="M18 9.5v3M18 16.5v3" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[1.1875rem] font-extrabold uppercase tracking-[0.08em]">
        {site.name}
      </span>
    </span>
  )
}
