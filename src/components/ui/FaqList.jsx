import { Plus } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

/**
 * Accordion built on native <details>, so it works with the keyboard and
 * without JavaScript. Sharing one `name` makes the items exclusive in
 * browsers that support it; elsewhere several can be open, which is fine.
 */
export default function FaqList({ items, name = 'faq' }) {
  const { t } = useLanguage()

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.id} name={name} className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[1.0625rem] font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            <span>{t(item.question)}</span>
            <Plus
              className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-[68ch] pb-6 pr-10 text-body">{t(item.answer)}</p>
        </details>
      ))}
    </div>
  )
}
