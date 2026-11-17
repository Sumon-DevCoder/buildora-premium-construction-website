import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ErrorBoundary from '@/components/layout/ErrorBoundary'
import Footer from '@/components/layout/Footer'
import MobileActionBar from '@/components/layout/MobileActionBar'
import Navbar from '@/components/layout/Navbar'
import { LoadingLabel } from '@/components/ui/Feedback'
import { useLanguage } from '@/hooks/useLanguage'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { ui } from '@/i18n/ui'

/** Dark band the height of a page hero, shown while a page chunk loads. */
function PageFallback() {
  return (
    <div className="bg-blueprint min-h-[60vh] bg-ink">
      <LoadingLabel />
    </div>
  )
}

export default function PublicLayout() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  useSmoothScroll()

  return (
    <>
      <a
        href="#main"
        className="sr-only z-60 rounded-lg bg-white px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t(ui.nav.skipToContent)}
      </a>

      <Navbar />

      <main id="main">
        {/* Keyed by path so an error on one page clears when navigating away. */}
        <ErrorBoundary key={pathname}>
          <Suspense fallback={<PageFallback />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
      <MobileActionBar />
    </>
  )
}
