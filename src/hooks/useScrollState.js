import { useEffect, useState } from 'react'

const SCROLLED_AFTER_PX = 16
const HIDE_AFTER_PX = 480
const DIRECTION_THRESHOLD_PX = 6

/**
 * Tracks page scroll for the header and the mobile action bar.
 * - `scrolled`: the page has moved away from the very top
 * - `hidden`: the visitor is scrolling down, far enough to hide the header
 * - `pastHero`: roughly one screen has been scrolled
 */
export function useScrollState() {
  const [state, setState] = useState({ scrolled: false, hidden: false, pastHero: false })

  useEffect(() => {
    let lastY = window.scrollY
    let frame = null

    const update = () => {
      frame = null
      const y = window.scrollY
      const delta = y - lastY

      setState((prev) => {
        const scrolled = y > SCROLLED_AFTER_PX
        const pastHero = y > window.innerHeight * 0.7
        let hidden = prev.hidden
        if (y < HIDE_AFTER_PX) hidden = false
        else if (delta > DIRECTION_THRESHOLD_PX) hidden = true
        else if (delta < -DIRECTION_THRESHOLD_PX) hidden = false

        const unchanged =
          prev.scrolled === scrolled && prev.hidden === hidden && prev.pastHero === pastHero
        return unchanged ? prev : { scrolled, hidden, pastHero }
      })

      lastY = y
    }

    // One update per frame keeps scrolling smooth on low-end phones.
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return state
}
