import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { cn } from '@/utils/cn'

/** Shows the *other* language, in its own script, so it is recognisable. */
export default function LangToggle({ className }) {
  const { lang, setLang, t } = useLanguage()
  const next = lang === 'en' ? 'bn' : 'en'

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={t(ui.nav.switchLanguage)}
      className={cn(
        'inline-flex h-11 items-center rounded-lg px-3 text-[0.9375rem] font-medium transition-opacity hover:opacity-70',
        className,
      )}
    >
      <span lang={next}>{next === 'bn' ? 'বাংলা' : 'English'}</span>
    </button>
  )
}
