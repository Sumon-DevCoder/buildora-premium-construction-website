import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <>
      <Seo title={t(ui.pages.notFound.seoTitle)} noindex />
      <PageHero
        eyebrow={t(ui.pages.notFound.eyebrow)}
        title={t(ui.pages.notFound.title)}
        lead={t(ui.pages.notFound.lead)}
        crumbs={[{ label: '404' }]}
      />
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap gap-3">
            <Button to="/">
              <ArrowLeft className="size-4" strokeWidth={2} aria-hidden="true" />
              {t(ui.pages.notFound.home)}
            </Button>
            <Button to="/projects" variant="secondary">
              {t(ui.nav.projects)}
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
