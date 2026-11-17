import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import LangToggle from '@/components/ui/LangToggle'
import Logo from '@/components/ui/Logo'
import { site } from '@/config/site'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollState } from '@/hooks/useScrollState'
import { ui } from '@/i18n/ui'
import { cn } from '@/utils/cn'

// Six items at most (Hick's law): more choices slow people down.
const LINKS = [
  { to: '/', label: ui.nav.home, end: true },
  { to: '/about', label: ui.nav.about },
  { to: '/services', label: ui.nav.services },
  { to: '/projects', label: ui.nav.projects },
  { to: '/team', label: ui.nav.team },
  { to: '/contact', label: ui.nav.contact },
]

const MENU_ID = 'mobile-menu'

export default function Navbar() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const { scrolled, hidden } = useScrollState()
  const [open, setOpen] = useState(false)

  // Close the menu after navigating.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // While the menu is open: lock page scroll and let Escape close it.
  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // Every page starts with a dark hero, so the bar is transparent at the top.
  const solid = scrolled && !open

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color,color] duration-300 ease-soft',
          solid
            ? 'border-line/80 bg-white/90 backdrop-blur-md text-ink shadow-xs'
            : 'border-transparent bg-transparent text-white',
          hidden && !open ? '-translate-y-full' : 'translate-y-0',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
          <Link to="/" aria-label={`${site.name} – ${t(ui.nav.home)}`} className="shrink-0 transition-opacity hover:opacity-85">
            <Logo />
          </Link>

          <nav aria-label={t(ui.nav.mainNav)} className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className="group relative py-2 text-[0.9375rem] font-medium transition-colors hover:text-accent"
                  >
                    {({ isActive }) => (
                      <>
                        <span className={isActive ? 'text-accent font-semibold' : 'text-current'}>
                          {t(link.label)}
                        </span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            'absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-accent transition-all duration-300 ease-soft',
                            isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100',
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1 lg:gap-4">
            <LangToggle />

            {site.phone.tel && (
              <a
                href={site.phone.tel}
                className="hidden items-center gap-2 text-[0.9375rem] font-medium tabular-nums xl:inline-flex"
              >
                <Phone className="size-4" strokeWidth={1.75} aria-hidden="true" />
                {site.phone.display}
              </a>
            )}

            <div className="hidden md:block">
              <Button to="/contact">
                {t(ui.nav.getQuote)}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={MENU_ID}
              aria-label={t(open ? ui.nav.closeMenu : ui.nav.openMenu)}
              className="-mr-2 inline-flex size-12 items-center justify-center lg:hidden"
            >
              {open ? (
                <X className="size-6" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="size-6" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </header>

      <div
        id={MENU_ID}
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink pt-16 text-white md:pt-20 lg:hidden"
      >
        <Container className="flex flex-1 flex-col pb-8">
          <nav aria-label={t(ui.nav.mainNav)} className="mt-4">
            <ul className="divide-y divide-white/10">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className="flex h-14 items-center font-display text-xl font-semibold aria-[current=page]:text-accent-soft"
                  >
                    {t(link.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions sit at the bottom, within easy reach of the thumb. */}
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Button to="/contact">{t(ui.nav.getQuote)}</Button>
            {site.phone.tel && (
              <Button href={site.phone.tel} variant="light">
                <Phone className="size-4" strokeWidth={1.75} aria-hidden="true" />
                <span className="tabular-nums">{site.phone.display}</span>
              </Button>
            )}
          </div>
        </Container>
      </div>
    </>
  )
}
