import AboutSection from '@/components/home/AboutSection'
import FaqSection from '@/components/home/FaqSection'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import FinalCta from '@/components/home/FinalCta'
import Hero from '@/components/home/Hero'
import ProcessSection from '@/components/home/ProcessSection'
import ServicesSection from '@/components/home/ServicesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustStrip from '@/components/home/TrustStrip'
import Seo from '@/components/seo/Seo'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'

/**
 * Story arc (README section 7): attention → trust → offer → proof →
 * who we are → how we work → reassurance → action.
 */
export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Seo title={t(ui.pages.home.seoTitle)} description={t(ui.pages.home.seoDescription)} />
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <FeaturedProjects />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  )
}
