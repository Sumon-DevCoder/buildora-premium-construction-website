import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getProcessSteps } from '@/services/api'
import { localizeDigits } from '@/utils/format'

/**
 * "What happens if I contact them?" Showing the steps lowers anxiety.
 * Vertical list on phones, three columns on desktop; a line draws in once.
 */
export default function ProcessSection() {
  const { t, lang } = useLanguage()
  const reduceMotion = useReducedMotion()
  const { data: steps, loading, error } = useApi(getProcessSteps)

  return (
    <section aria-labelledby="process-heading" className="bg-blueprint bg-ink py-18 md:py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="process-heading"
          tone="dark"
          eyebrow={t(ui.processSection.eyebrow)}
          title={t(ui.processSection.title)}
          intro={t(ui.processSection.intro)}
        />

        <div className="relative mt-12 md:mt-16">
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-px origin-left bg-white/25 lg:block"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {error ? (
            <LoadError tone="dark" />
          ) : loading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }, (_, index) => (
                <Skeleton key={index} className="h-32 bg-white/10" />
              ))}
            </div>
          ) : (
            <ol className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
              {steps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.id}
                  delay={(index % 3) * 0.08}
                  className="relative border-l border-white/20 pb-10 pl-7 last:pb-0 md:pb-12 lg:border-l-0 lg:pb-0 lg:pl-0 lg:pt-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent lg:-top-[5px] lg:left-0"
                  />
                  <p className="font-display text-[0.9375rem] font-semibold tabular-nums text-accent-soft">
                    {localizeDigits(String(index + 1).padStart(2, '0'), lang)}
                  </p>
                  <h3 className="text-h3 mt-2 text-white">{t(step.title)}</h3>
                  <p className="mt-2 max-w-sm text-[0.9375rem] text-white/70">{t(step.text)}</p>
                </Reveal>
              ))}
            </ol>
          )}
        </div>
      </Container>
    </section>
  )
}
