import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceIcon from '@/components/ui/ServiceIcon'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getServices } from '@/services/api'

// Phones: a swipe row with the next card peeking. Tablet and up: a grid.
const ROW =
  'no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3'
// `relative` keeps any absolutely positioned child (e.g. sr-only text) inside the scroll row.
const CELL = 'relative w-[82%] shrink-0 snap-start md:w-auto'

function ServiceCard({ service }) {
  const { t } = useLanguage()

  return (
    <Link
      to={`/services#${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/75 hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="flex size-14 items-center justify-center rounded-xl border border-line bg-sand text-ink transition-all duration-300 group-hover:scale-105 group-hover:border-accent/40 group-hover:bg-accent-soft group-hover:text-accent">
        <ServiceIcon name={service.icon} className="size-7" />
      </div>
      <h3 className="text-h3 mt-6 transition-colors duration-200 group-hover:text-accent">{t(service.title)}</h3>
      <p className="mt-3 text-body">{t(service.summary)}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-[0.9375rem] font-semibold text-ink transition-colors duration-200 group-hover:text-accent">
        {t(ui.common.learnMore)}
        <ArrowRight
          className="size-4 transition-transform duration-300 ease-soft group-hover:translate-x-1.5"
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}

/** "Do they do what I need?" Six services, no more (Hick's law). */
export default function ServicesSection() {
  const { t } = useLanguage()
  const { data, loading, error } = useApi(getServices)
  const services = (data ?? []).filter((service) => service.is_featured).slice(0, 6)

  return (
    <section aria-labelledby="services-heading" className="bg-sand py-18 md:py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow={t(ui.servicesSection.eyebrow)}
          title={t(ui.servicesSection.title)}
          intro={t(ui.servicesSection.intro)}
        />

        <div className="mt-10 md:mt-14">
          {error ? (
            <LoadError />
          ) : loading ? (
            <div className={ROW}>
              {Array.from({ length: 6 }, (_, index) => (
                <Skeleton key={index} className={`${CELL} h-64 rounded-xl`} />
              ))}
            </div>
          ) : (
            <ul className={ROW}>
              {services.map((service, index) => (
                <Reveal as="li" key={service.id} delay={(index % 3) * 0.07} className={CELL}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </ul>
          )}
        </div>

        <Link
          to="/services"
          className="mt-10 inline-flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-ink"
        >
          {t(ui.servicesSection.viewAll)}
          <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  )
}
