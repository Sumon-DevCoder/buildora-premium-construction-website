import { ShieldCheck } from 'lucide-react'
import Container from '@/components/ui/Container'
import Counter from '@/components/ui/Counter'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import { site } from '@/config/site'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getStats } from '@/services/api'

/** "Can I trust them?" Numbers first, then credentials as plain text. */
export default function TrustStrip() {
  const { t } = useLanguage()
  const { data: stats, loading, error } = useApi(getStats)

  return (
    <section aria-labelledby="trust-heading" className="border-b border-line bg-white">
      <Container className="py-12 md:py-16">
        <h2 id="trust-heading" className="sr-only">
          {t(ui.trust.heading)}
        </h2>

        {error ? (
          <LoadError />
        ) : (
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-line">
            {loading
              ? Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className="md:px-8 md:first:pl-0">
                    <Skeleton className="h-12 w-24" />
                    <Skeleton className="mt-3 h-4 w-32" />
                  </div>
                ))
              : stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="group flex flex-col-reverse transition-transform duration-200 hover:-translate-y-1 md:px-8 md:first:pl-0"
                  >
                    <dt className="mt-2 text-[0.9375rem] text-muted transition-colors group-hover:text-ink">
                      {t(stat.label)}
                    </dt>
                    <dd className="font-display text-4xl font-bold tabular-nums text-ink transition-colors duration-200 group-hover:text-accent md:text-5xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </dd>
                  </div>
                ))}
          </dl>
        )}

        <ul
          aria-label={t(ui.trust.credentials)}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8"
        >
          {site.credentials.map((credential) => (
            <li
              key={credential.en}
              className="flex items-center gap-2 rounded-lg border border-transparent px-2.5 py-1 text-[0.9375rem] font-medium text-body transition-all duration-200 hover:border-line hover:bg-sand/80 hover:text-ink"
            >
              <ShieldCheck className="size-4.5 text-accent" strokeWidth={1.75} aria-hidden="true" />
              {t(credential)}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
