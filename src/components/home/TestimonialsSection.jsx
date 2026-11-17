import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Container from '@/components/ui/Container'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import Reveal from '@/components/ui/Reveal'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getTeam, getTestimonials } from '@/services/api'
import { localizeDigits } from '@/utils/format'

function ArrowButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex size-12 items-center justify-center rounded-lg border border-line text-ink transition-all duration-200 hover:border-ink hover:bg-ink hover:text-white hover:scale-105 active:scale-95"
    >
      {children}
    </button>
  )
}

/** One testimonial at a time, changed only by the visitor (no autoplay). */
function TestimonialSlider({ items }) {
  const { t, lang } = useLanguage()
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const item = items[index]

  const go = (step) => setIndex((current) => (current + step + items.length) % items.length)

  return (
    <div>
      <Quote className="size-8 text-ink" strokeWidth={1.25} aria-hidden="true" />

      <div aria-live="polite" className="mt-6 min-h-72 sm:min-h-60">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={item.id}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="font-display text-[1.25rem] font-medium leading-relaxed text-ink md:text-[1.4375rem]">
              “{t(item.quote)}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold text-ink">{t(item.name)}</p>
              <p className="text-[0.9375rem] text-muted">
                {t(item.role)} · {t(item.location)}
              </p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <div className="mt-8 flex items-center gap-3">
          <ArrowButton label={t(ui.testimonialsSection.previous)} onClick={() => go(-1)}>
            <ChevronLeft className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </ArrowButton>
          <ArrowButton label={t(ui.testimonialsSection.next)} onClick={() => go(1)}>
            <ChevronRight className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </ArrowButton>
          <p className="ml-2 text-sm tabular-nums text-muted">
            {localizeDigits(`${index + 1} / ${items.length}`, lang)}
          </p>
        </div>
      )}
    </div>
  )
}

/** "What do people like me say?" A real face (the MD) next to client words. */
export default function TestimonialsSection() {
  const { t } = useLanguage()
  const teamState = useApi(getTeam)
  const testimonialsState = useApi(getTestimonials)
  const loading = teamState.loading || testimonialsState.loading
  const error = teamState.error || testimonialsState.error
  const director = (teamState.data ?? []).find((member) => member.is_leadership)

  return (
    <section aria-labelledby="testimonials-heading" className="bg-white py-18 md:py-24 lg:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted">{t(ui.testimonialsSection.eyebrow)}</p>
          <h2 id="testimonials-heading" className="text-h2 mt-3">
            {t(ui.testimonialsSection.title)}
          </h2>
        </Reveal>

        {error ? (
          <LoadError className="mt-10" />
        ) : loading ? (
          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <Skeleton className="h-80 lg:col-span-4" />
            <Skeleton className="h-80 lg:col-span-8" />
          </div>
        ) : (
          <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
            {director && (
              <Reveal as="aside" className="lg:col-span-4">
                <div className="flex gap-5 lg:block">
                  <Avatar
                    photo={director.photo}
                    alt={t(director.name)}
                    initialsFrom={director.name.en}
                    className="aspect-4/5 w-28 shrink-0 rounded-xl sm:w-36 lg:w-full lg:max-w-xs"
                  />
                  <div className="lg:mt-6">
                    <p className="eyebrow text-muted">{t(ui.testimonialsSection.mdEyebrow)}</p>
                    <p className="mt-3 text-body">“{t(director.message)}”</p>
                    <p className="mt-4 font-semibold text-ink">{t(director.name)}</p>
                    <p className="text-[0.9375rem] text-muted">{t(director.role)}</p>
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.08} className="lg:col-span-8 lg:border-l lg:border-line lg:pl-16">
              <TestimonialSlider items={testimonialsState.data} />
            </Reveal>
          </div>
        )}
      </Container>
    </section>
  )
}
