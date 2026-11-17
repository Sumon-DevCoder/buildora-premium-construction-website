import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import Img from '@/components/ui/Img'
import Reveal from '@/components/ui/Reveal'
import ServiceIcon from '@/components/ui/ServiceIcon'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getReasons, getStory } from '@/services/api'

/** "Who is behind this, and why them?" One strong photo, four plain reasons. */
export default function AboutSection() {
  const { t } = useLanguage()
  const storyState = useApi(getStory)
  const reasonsState = useApi(getReasons)
  const story = storyState.data
  const reasons = reasonsState.data
  const loading = storyState.loading || reasonsState.loading
  const error = storyState.error || reasonsState.error

  return (
    <section aria-labelledby="about-heading" className="border-t border-line bg-white py-18 md:py-24 lg:py-32">
      <Container>
        {error ? (
          <LoadError />
        ) : loading ? (
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Skeleton className="aspect-4/3 rounded-xl lg:col-span-5 lg:aspect-4/5" />
            <div className="space-y-4 lg:col-span-7">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-24" />
              <Skeleton className="h-40" />
            </div>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal as="figure" className="lg:col-span-5">
              <Img src={story.image} alt={t(story.image_alt)} className="aspect-4/3 rounded-xl lg:aspect-4/5" />
              <figcaption className="mt-3 text-sm text-muted">{t(story.image_caption)}</figcaption>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-muted">{t(ui.aboutSection.eyebrow)}</p>
                <h2 id="about-heading" className="text-h2 mt-3">
                  {t(story.heading)}
                </h2>
                <div className="mt-6 max-w-[68ch] space-y-4">
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph.en}>{t(paragraph)}</p>
                  ))}
                </div>
              </Reveal>

              <ul className="mt-10 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2">
                {reasons.map((reason, index) => (
                  <Reveal as="li" key={reason.id} delay={(index % 2) * 0.07}>
                    <ServiceIcon name={reason.icon} className="size-7 text-ink" />
                    <h3 className="mt-4 font-display text-[1.0625rem] font-semibold text-ink">
                      {t(reason.title)}
                    </h3>
                    <p className="mt-2 text-[0.9375rem]">{t(reason.text)}</p>
                  </Reveal>
                ))}
              </ul>

              <Button to="/about" variant="secondary" className="mt-10">
                {t(ui.aboutSection.cta)}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
