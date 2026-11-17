import { FileText, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollState } from '@/hooks/useScrollState'
import { ui } from '@/i18n/ui'
import { cn } from '@/utils/cn'

const ITEM = 'flex h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold'

/** A link to the real channel when configured, otherwise to the contact page. */
function ContactAction({ href, icon: Icon, label }) {
  const content = (
    <>
      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
      {label}
    </>
  )

  if (!href) {
    return (
      <Link to="/contact" className={cn(ITEM, 'text-ink')}>
        {content}
      </Link>
    )
  }

  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className={cn(ITEM, 'text-ink')}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  )
}

/**
 * Phone-only bar fixed in the thumb zone (Fitts's law). It appears after the
 * hero so it never covers the hero's own buttons.
 */
export default function MobileActionBar() {
  const { t } = useLanguage()
  const { pastHero } = useScrollState()

  return (
    <nav
      aria-label={t(ui.nav.quickActions)}
      inert={!pastHero}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-soft md:hidden',
        pastHero ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="grid grid-cols-3 divide-x divide-line">
        <ContactAction href={site.phone.tel} icon={Phone} label={t(ui.nav.call)} />
        <ContactAction href={site.phone.whatsapp} icon={MessageCircle} label={t(ui.nav.whatsapp)} />
        <Link to="/contact" className={cn(ITEM, 'bg-accent text-white')}>
          <FileText className="size-5" strokeWidth={1.75} aria-hidden="true" />
          {t(ui.nav.quote)}
        </Link>
      </div>
    </nav>
  )
}
