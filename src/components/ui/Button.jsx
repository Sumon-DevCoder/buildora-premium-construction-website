import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

const BASE =
  'inline-flex h-13 items-center justify-center gap-2 rounded-lg px-6 font-display text-[0.9375rem] font-semibold transition-colors duration-200 md:h-12 disabled:pointer-events-none disabled:opacity-50'

const VARIANTS = {
  // The only filled, colored button: reserved for the main action on a screen.
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'border border-ink text-ink hover:bg-ink hover:text-white',
  // For dark backgrounds and photos.
  light: 'border border-white/60 text-white hover:bg-white hover:text-ink',
}

/**
 * Renders a router link (`to`), an anchor (`href`) or a button.
 */
export default function Button({ to, href, variant = 'primary', className, children, ...rest }) {
  const classes = cn(BASE, VARIANTS[variant], className)

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
