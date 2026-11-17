import { Clock, Download, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'
import { site } from '@/config/site'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getServices } from '@/services/api'
import { localizeDigits } from '@/utils/format'

const COMPANY_LINKS = [
  { to: '/about', label: ui.nav.about },
  { to: '/projects', label: ui.nav.projects },
  { to: '/team', label: ui.nav.team },
  { to: '/contact', label: ui.nav.contact },
]

const LINK = 'text-white/70 transition-colors hover:text-white'

function ContactRow({ icon: Icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-1 size-4.5 shrink-0 text-white/50" strokeWidth={1.5} aria-hidden="true" />
      <span>{children}</span>
    </li>
  )
}

export default function Footer() {
  const { t, lang } = useLanguage()
  const { data: services } = useApi(getServices)
  const year = localizeDigits(new Date().getFullYear(), lang)

  return (
    // Extra bottom padding on phones keeps content clear of the action bar.
    <footer className="bg-ink pb-20 text-[0.9375rem] text-white/70 md:pb-0">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link to="/" className="text-white" aria-label={site.name}>
            <Logo />
          </Link>
          <p className="mt-5 max-w-sm">{t(site.description)}</p>
          {site.company_profile_url && (
            <a
              href={site.company_profile_url}
              className="mt-6 inline-flex items-center gap-2 font-medium text-white underline underline-offset-4"
            >
              <Download className="size-4" strokeWidth={1.75} aria-hidden="true" />
              {t(ui.footer.profile)}
            </a>
          )}
        </div>

        <nav aria-label={t(ui.footer.company)} className="lg:col-span-2">
          <h2 className="eyebrow text-white">{t(ui.footer.company)}</h2>
          <ul className="mt-5 space-y-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={LINK}>
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t(ui.footer.services)} className="lg:col-span-3">
          <h2 className="eyebrow text-white">{t(ui.footer.services)}</h2>
          <ul className="mt-5 space-y-3">
            {(services ?? [])
              .filter((service) => service.is_featured)
              .map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.slug}`} className={LINK}>
                    {t(service.title)}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-white">{t(ui.footer.contact)}</h2>
          <ul className="mt-5 space-y-4">
            <ContactRow icon={MapPin}>
              <a href={site.map_url} target="_blank" rel="noopener noreferrer" className={LINK}>
                {t(site.address)}
                <span className="sr-only"> ({t(ui.footer.openMap)})</span>
              </a>
            </ContactRow>
            <ContactRow icon={Phone}>
              {site.phone.tel ? (
                <a href={site.phone.tel} className={`${LINK} tabular-nums`}>
                  {site.phone.display}
                </a>
              ) : (
                <span className="tabular-nums">{site.phone.display}</span>
              )}
            </ContactRow>
            <ContactRow icon={Mail}>
              {site.email.mailto ? (
                <a href={site.email.mailto} className={LINK}>
                  {site.email.display}
                </a>
              ) : (
                site.email.display
              )}
            </ContactRow>
            <ContactRow icon={Clock}>
              {t(site.hours)}
              <br />
              {t(site.hours_closed)}
            </ContactRow>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {t(site.legal_name)}. {t(ui.footer.rights)}
          </p>
          <p>{t(ui.footer.credit)}</p>
        </Container>
        <Container className="pb-6 text-sm text-white/45">
          <p>{t(ui.footer.demo)}</p>
        </Container>
      </div>
    </footer>
  )
}
