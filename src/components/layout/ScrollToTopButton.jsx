import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={cn(
        'fixed bottom-6 right-6 z-40 hidden size-12 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-lg backdrop-blur-md transition-all duration-300 md:flex',
        'hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-xl hover:shadow-accent/20 active:scale-95',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp className="size-5" strokeWidth={2} aria-hidden="true" />
    </button>
  )
}
