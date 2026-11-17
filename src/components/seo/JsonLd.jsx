import { useEffect } from 'react'

/**
 * Adds a schema.org JSON-LD block for the current page and removes it on
 * leave. `textContent` is used, so the data is never parsed as HTML.
 */
export default function JsonLd({ id, data }) {
  const json = JSON.stringify(data)

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.jsonLd = id
    script.textContent = json
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [id, json])

  return null
}
