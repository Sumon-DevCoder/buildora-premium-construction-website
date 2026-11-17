import { ArrowRight, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/config/site'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'

const IMAGE = '/images/projects/rebar-foundation-work.webp'

/** "OK, what now?" The last thing on the page is the clearest next step. */
export default function FinalCta() {
  const { t } = useLanguage()

  return (
    <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-ink">
      <img
        src={IMAGE}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/85" />

      <Container className="py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 id="cta-heading" className="text-h2 text-white">
            {t(ui.cta.title)}
          </h2>
          <p className="text-lead mt-5 text-white/80">{t(ui.cta.text)}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">
              {t(ui.cta.primary)}
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
            </Button>
            {site.phone.tel && (
              <Button href={site.phone.tel} variant="light">
                <Phone className="size-4" strokeWidth={1.75} aria-hidden="true" />
                {t(ui.cta.call)} <span className="tabular-nums">{site.phone.display}</span>
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
