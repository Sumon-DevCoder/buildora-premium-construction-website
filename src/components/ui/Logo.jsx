import { site } from '@/config/site'
import { cn } from '@/utils/cn'

/** Brand logo image with a clean light backing so it stays crisp on both dark and light headers. */
export default function Logo({ className }) {
  return (
    <span className={cn('inline-flex items-center rounded-lg bg-white/95 px-2.5 py-1', className)}>
      <img
        src="/images/growx-logo.png"
        alt={site.name}
        className="h-7 w-auto object-contain sm:h-8"
      />
    </span>
  )
}
