import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'

/**
 * Dark title band for inner pages. `crumbs` is a list of
 * `{ label, to? }`; Home is added automatically and the last item is the
 * current page.
 */
export default function PageHero({ eyebrow, title, lead, crumbs = [], children }) {
  const { t } = useLanguage()
  const trail = [{ label: t(ui.nav.home), to: '/' }, ...crumbs]

  return (
    <section className="bg-blueprint bg-ink pb-14 pt-28 md:pb-20 md:pt-40">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            {trail.map((crumb, index) => {
              const last = index === trail.length - 1
              return (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                  {crumb.to && !last ? (
                    <Link to={crumb.to} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current={last ? 'page' : undefined} className={last ? 'text-white/85' : undefined}>
                      {crumb.label}
                    </span>
                  )}
                  {!last && <ChevronRight className="size-3.5" strokeWidth={1.75} aria-hidden="true" />}
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          {eyebrow && <p className="eyebrow text-white/65">{eyebrow}</p>}
          <h1 className="text-h1 mt-3 text-white">{title}</h1>
          {lead && <p className="text-lead mt-5 max-w-2xl text-white/80">{lead}</p>}
          {children}
        </div>
      </Container>
    </section>
  )
}
