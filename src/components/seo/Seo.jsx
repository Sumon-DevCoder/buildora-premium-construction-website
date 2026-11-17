import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '@/config/site'

const DEFAULT_IMAGE = '/og-image.jpg'

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

/**
 * Per-page title, description, canonical URL and Open Graph tags.
 * It updates the tags already in index.html instead of adding duplicates.
 */
export default function Seo({ title, description, image = DEFAULT_IMAGE, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const origin = site.url || window.location.origin
    const url = `${origin}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
    const imageUrl = image.startsWith('http') ? image : `${origin}${image}`

    document.title = title
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertCanonical(url)

    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
    }
  }, [title, description, image, noindex, pathname])

  return null
}
