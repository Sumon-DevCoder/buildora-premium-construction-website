import { useCallback, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANGUAGE, LANGUAGES, LanguageContext } from './language-context'

const STORAGE_KEY = 'buildora:lang'

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE
  } catch {
    // Storage can be blocked (private mode); fall back to the default.
    return DEFAULT_LANGUAGE
  }
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Not being able to remember the choice is not an error for the visitor.
    }
  }, [])

  /**
   * Resolve bilingual content. Accepts a plain string or an { en, bn }
   * object (the same shape spatie/laravel-translatable returns).
   */
  const t = useCallback(
    (value) => {
      if (value == null) return ''
      if (typeof value === 'string' || typeof value === 'number') return String(value)
      return value[lang] ?? value[DEFAULT_LANGUAGE] ?? ''
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
