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
                  <div key={stat.id} className="flex flex-col-reverse md:px-8 md:first:pl-0">
                    <dt className="mt-2 text-[0.9375rem] text-muted">{t(stat.label)}</dt>
                    <dd className="font-display text-4xl font-bold tabular-nums text-ink md:text-5xl">
                      <Counter value={stat.value} />
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
            <li key={credential.en} className="flex items-center gap-2 text-[0.9375rem] font-medium text-body">
              <ShieldCheck className="size-4.5 text-ink" strokeWidth={1.5} aria-hidden="true" />
              {t(credential)}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
