import { ArrowRight, Check } from 'lucide-react'
import FinalCta from '@/components/home/FinalCta'
import ProcessSection from '@/components/home/ProcessSection'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/seo/JsonLd'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import FaqList from '@/components/ui/FaqList'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import Img from '@/components/ui/Img'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceIcon from '@/components/ui/ServiceIcon'
import { site } from '@/config/site'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getFaqs, getServices } from '@/services/api'
import { cn } from '@/utils/cn'

export default function Services() {
  const { t } = useLanguage()
  const { data: services, loading, error } = useApi(getServices, [])
  const { data: faqs, loading: faqsLoading } = useApi(getFaqs, [])

  const origin = site.url || (typeof window !== 'undefined' ? window.location.origin : '')

  return (
    <>
      <Seo title={t(ui.pages.services.seoTitle)} description={t(ui.pages.services.seoDescription)} />
      <JsonLd
        id="breadcrumb-services"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t(ui.nav.home), item: `${origin}/` },
            { '@type': 'ListItem', position: 2, name: t(ui.nav.services), item: `${origin}/services` },
          ],
        }}
      />
      {faqs && faqs.length > 0 && (
        <JsonLd
          id="faq-services"
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: t(item.question),
              acceptedAnswer: { '@type': 'Answer', text: t(item.answer) },
            })),
          }}
        />
      )}

      <PageHero
        eyebrow={t(ui.pages.services.eyebrow)}
        title={t(ui.pages.services.title)}
        lead={t(ui.pages.services.lead)}
        crumbs={[{ label: t(ui.nav.services) }]}
      />

      <section className="bg-white py-18 md:py-24 lg:py-32">
        <Container>
          {error ? (
            <LoadError />
          ) : loading || !services ? (
            <div className="space-y-16">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="grid gap-10 lg:grid-cols-12">
                  <Skeleton className="aspect-4/3 rounded-xl lg:col-span-6" />
                  <Skeleton className="h-64 rounded-xl lg:col-span-6" />
                </div>
              ))}
            </div>
          ) : (
            <div className="divide-y divide-line">
              {services.map((service, index) => {
                const reversed = index % 2 === 1
                return (
                  <article
                    key={service.id}
                    id={service.slug}
                    className="grid items-center gap-10 py-14 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-16 lg:py-20"
                  >
                    <Reveal className={cn('lg:col-span-6', reversed && 'lg:order-2')}>
                      <Img
                        src={service.image}
                        alt={t(service.image_alt)}
                        className="aspect-4/3 rounded-xl"
                      />
                    </Reveal>

                    <Reveal delay={0.08} className={cn('lg:col-span-6', reversed && 'lg:order-1')}>
                      <div className="flex size-12 items-center justify-center rounded-lg border border-line bg-sand text-ink">
                        <ServiceIcon name={service.icon} className="size-6" />
                      </div>
                      <h2 className="text-h2 mt-5">{t(service.title)}</h2>
                      <p className="mt-4 max-w-[65ch] text-body">{t(service.description)}</p>

                      {service.features?.length > 0 && (
                        <div className="mt-6">
                          <p className="eyebrow text-muted">{t(ui.pages.services.includes)}</p>
                          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                            {service.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-[0.9375rem] text-ink">
                                <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                                <span>{t(feature)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mt-8">
                        <Button to={`/contact?service=${encodeURIComponent(service.slug)}`} variant="secondary">
                          {t(ui.pages.services.quoteCta)}
                          <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                        </Button>
                      </div>
                    </Reveal>
                  </article>
                )
              })}
            </div>
          )}
        </Container>
      </section>

      <ProcessSection />

      <section className="bg-sand py-18 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow={t(ui.faqSection.eyebrow)}
            title={t(ui.faqSection.title)}
            intro={t(ui.faqSection.intro)}
          />
          <div className="mt-10 max-w-3xl">
            {faqsLoading || !faqs ? <Skeleton className="h-64 rounded-xl" /> : <FaqList items={faqs} />}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  )
}
