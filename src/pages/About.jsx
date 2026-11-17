import { ArrowRight, Award } from 'lucide-react'
import FinalCta from '@/components/home/FinalCta'
import TrustStrip from '@/components/home/TrustStrip'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/seo/JsonLd'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import Img from '@/components/ui/Img'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { site } from '@/config/site'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getStory, getTimeline, getValues } from '@/services/api'
import { localizeDigits } from '@/utils/format'

export default function About() {
  const { lang, t } = useLanguage()
  const { data: story, loading: storyLoading, error: storyError } = useApi(getStory, [])
  const { data: values, loading: valuesLoading } = useApi(getValues, [])
  const { data: timeline, loading: timelineLoading } = useApi(getTimeline, [])

  const origin = site.url || (typeof window !== 'undefined' ? window.location.origin : '')

  return (
    <>
      <Seo title={t(ui.pages.about.seoTitle)} description={t(ui.pages.about.seoDescription)} />
      <JsonLd
        id="breadcrumb-about"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t(ui.nav.home), item: `${origin}/` },
            { '@type': 'ListItem', position: 2, name: t(ui.nav.about), item: `${origin}/about` },
          ],
        }}
      />

      <PageHero
        eyebrow={t(ui.pages.about.eyebrow)}
        title={t(ui.pages.about.title)}
        lead={t(ui.pages.about.lead)}
        crumbs={[{ label: t(ui.nav.about) }]}
        bgImage="/images/about/construction-team-steel-rods-site.webp"
      />

      <section className="bg-white py-18 md:py-24 lg:py-32">
        <Container>
          {storyError ? (
            <LoadError />
          ) : storyLoading || !story ? (
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Skeleton className="aspect-4/3 rounded-xl lg:col-span-6" />
              <Skeleton className="h-64 rounded-xl lg:col-span-6" />
            </div>
          ) : (
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-6">
                <Img
                  src={story.image}
                  alt={t(story.image_alt)}
                  className="aspect-4/3 rounded-xl"
                />
                {story.image_caption && (
                  <p className="mt-3 text-sm text-muted">{t(story.image_caption)}</p>
                )}
              </Reveal>

              <Reveal delay={0.08} className="lg:col-span-6">
                <h2 className="text-h2">{t(story.heading)}</h2>
                <div className="mt-6 space-y-4">
                  {story.paragraphs.map((paragraph, index) => (
                    <p key={index} className="max-w-[65ch] text-body">
                      {t(paragraph)}
                    </p>
                  ))}
                </div>
                <div className="mt-8">
                  <Button to="/team" variant="secondary">
                    {t(ui.pages.about.teamCta)}
                    <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                  </Button>
                </div>
              </Reveal>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-sand py-18 md:py-24">
        <Container>
          <SectionHeading title={t(ui.pages.about.valuesTitle)} />

          {valuesLoading || !values ? (
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }, (_, index) => (
                <Skeleton key={index} className="h-44 rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {values.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.06} className="rounded-xl border border-line bg-white p-7">
                  <span className="font-display text-sm font-semibold tabular-nums text-accent">
                    {localizeDigits(String(index + 1).padStart(2, '0'), lang)}
                  </span>
                  <h3 className="text-h3 mt-3">{t(item.title)}</h3>
                  <p className="mt-3 text-body">{t(item.text)}</p>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="bg-white py-18 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow={t(ui.pages.about.timelineEyebrow)}
            title={t(ui.pages.about.timelineTitle)}
          />

          {timelineLoading || !timeline ? (
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {Array.from({ length: 4 }, (_, index) => (
                <Skeleton key={index} className="h-40 rounded-xl" />
              ))}
            </div>
          ) : (
            <ol className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2 lg:grid-cols-4">
              {timeline.map((step, index) => (
                <Reveal as="li" key={step.year} delay={index * 0.06}>
                  <p className="font-display text-2xl font-bold tabular-nums text-accent">
                    {localizeDigits(step.year, lang)}
                  </p>
                  <h3 className="text-h3 mt-2">{t(step.title)}</h3>
                  <p className="mt-2 text-body">{t(step.text)}</p>
                </Reveal>
              ))}
            </ol>
          )}
        </Container>
      </section>

      <section className="border-t border-line bg-sand py-18 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={t(ui.pages.about.credentialsEyebrow)}
            title={t(ui.pages.about.credentialsTitle)}
            intro={t(ui.pages.about.credentialsText)}
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.credentials.map((credential, index) => (
              <Reveal
                as="li"
                key={index}
                delay={index * 0.05}
                className="flex items-center gap-3 rounded-xl border border-line bg-white p-5"
              >
                <Award className="size-5 shrink-0 text-ink" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-display font-semibold text-ink">{t(credential)}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <TrustStrip />
      <FinalCta />
    </>
  )
}
