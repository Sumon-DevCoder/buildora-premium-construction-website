import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/config/site'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'

const HERO_IMAGE = '/images/hero/construction-site-high-rise-bangladesh.webp'

/**
 * Answers the visitor's first question: "Who are you, and are you serious?"
 * One photo, one message, one primary action.
 */
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-ink md:items-center">
      <img
        src={HERO_IMAGE}
        alt={t(ui.hero.imageAlt)}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Dark overlay keeps the text readable outdoors and on any photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/80 to-ink/45 md:bg-linear-to-r md:from-ink/95 md:via-ink/75 md:to-ink/25"
      />

      <Container className="pb-14 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-2xl">
          <Reveal as="p" className="eyebrow text-white/75">
            {t(ui.hero.eyebrow)}
          </Reveal>

          <Reveal as="h1" delay={0.08} className="text-display mt-5 text-white">
            {t(site.tagline)}
          </Reveal>

          <Reveal as="p" delay={0.16} className="text-lead mt-6 max-w-xl text-white/85">
            {t(ui.hero.lead)}
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">
              {t(ui.hero.primaryCta)}
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
            </Button>
            <Button to="/projects" variant="light">
              {t(ui.hero.secondaryCta)}
            </Button>
          </Reveal>

          <Reveal
            as="p"
            delay={0.32}
            className="mt-9 border-t border-white/15 pt-5 text-[0.9375rem] text-white/70"
          >
            {t(ui.hero.trustLine)}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
