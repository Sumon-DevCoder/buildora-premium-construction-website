import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'

const DEFAULT_BG = '/images/hero/construction-site-high-rise-bangladesh.webp'

/**
 * Cinematic title band for inner pages with background imagery and breadcrumb.
 * `crumbs` is a list of `{ label, to? }`; Home is added automatically.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  bgImage = DEFAULT_BG,
  children,
}) {
  const { t } = useLanguage()
  const trail = [{ label: t(ui.nav.home), to: '/' }, ...crumbs]

  return (
    <section className="relative isolate overflow-hidden bg-ink pb-8 pt-22 md:pb-10 md:pt-28">
      {/*
        Background photo at full strength. The overlay is darkest behind the
        text (bottom on phones, left on desktop) so the title stays readable
        outdoors, while the right side shows the photo clearly.
      */}
      {bgImage ? (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/80 to-ink/50 md:bg-linear-to-r md:from-ink/95 md:via-ink/70 md:to-ink/20"
          />
        </>
      ) : (
        <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-0 -z-10" />
      )}

      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/70 backdrop-blur-sm sm:text-sm">
            {trail.map((crumb, index) => {
              const last = index === trail.length - 1
              return (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                  {crumb.to && !last ? (
                    <Link to={crumb.to} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current={last ? 'page' : undefined} className={last ? 'font-medium text-white' : undefined}>
                      {crumb.label}
                    </span>
                  )}
                  {!last && <ChevronRight className="size-3.5 text-white/40" strokeWidth={1.75} aria-hidden="true" />}
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="mt-4 max-w-3xl">
          {eyebrow && <p className="eyebrow text-accent-soft">{eyebrow}</p>}
          <h1 className="text-h1 mt-2 text-white">{title}</h1>
          {lead && <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-white/80">{lead}</p>}
          {children}
        </div>
      </Container>
    </section>
  )
}
