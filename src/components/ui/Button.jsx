import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

const BASE =
  'inline-flex h-13 items-center justify-center gap-2 rounded-lg px-4 sm:px-6 font-display text-[0.9375rem] font-semibold whitespace-nowrap transition-all duration-200 md:h-12 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]'

const VARIANTS = {
  // The only filled, colored button: reserved for the main action on a screen.
  primary:
    'bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5',
  secondary:
    'border border-ink text-ink hover:bg-ink hover:text-white hover:shadow-md hover:-translate-y-0.5',
  // For dark backgrounds and photos.
  light:
    'border border-white/60 text-white hover:bg-white hover:text-ink hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5',
}

/**
 * Renders a router link (`to`), an anchor (`href`) or a button.
 */
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  // If className defines display utilities (e.g. hidden, flex, block), strip default inline-flex so it doesn't conflict
  const hasDisplayOverride = /\b(hidden|block|inline-block|flex|grid)\b/.test(className)
  const baseClasses = hasDisplayOverride ? BASE.replace('inline-flex', '').trim() : BASE
  const classes = cn(baseClasses, VARIANTS[variant], className)

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
