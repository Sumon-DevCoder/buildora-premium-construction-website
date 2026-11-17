import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import FaqList from '@/components/ui/FaqList'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import Reveal from '@/components/ui/Reveal'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getFaqs } from '@/services/api'

/** Handles cost, approval and payment worries before the final call to action. */
export default function FaqSection() {
  const { t } = useLanguage()
  const { data, loading, error } = useApi(getFaqs)
  const featured = (data ?? []).filter((faq) => faq.is_featured).slice(0, 4)

  return (
    <section aria-labelledby="faq-heading" className="bg-sand py-18 md:py-24 lg:py-32">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-muted">{t(ui.faqSection.eyebrow)}</p>
          <h2 id="faq-heading" className="text-h2 mt-3">
            {t(ui.faqSection.title)}
          </h2>
          <p className="text-lead mt-4">{t(ui.faqSection.intro)}</p>
          <p className="mt-8 text-[0.9375rem] text-muted">{t(ui.faqSection.contactPrompt)}</p>
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-ink underline decoration-line decoration-2 underline-offset-8 hover:decoration-ink"
          >
            {t(ui.faqSection.contactCta)}
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8">
          {error ? (
            <LoadError />
          ) : loading ? (
            <div className="space-y-3">
              {Array.from({ length: 4 }, (_, index) => (
                <Skeleton key={index} className="h-16" />
              ))}
            </div>
          ) : (
            <>
              <FaqList items={featured} name="home-faq" />
              <Link
                to="/services#faq"
                className="mt-8 inline-flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-ink underline decoration-line decoration-2 underline-offset-8 hover:decoration-ink"
              >
                {t(ui.faqSection.seeAll)}
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </Link>
            </>
          )}
        </Reveal>
      </Container>
    </section>
  )
}
