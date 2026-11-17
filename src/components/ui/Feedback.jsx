import { CircleAlert } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { cn } from '@/utils/cn'

/** Grey block shown while content loads. Size it with utility classes. */
export function Skeleton({ className }) {
  return <div aria-hidden="true" className={cn('animate-pulse rounded-lg bg-line/70', className)} />
}

/** Announces loading to screen readers without showing text. */
export function LoadingLabel() {
  const { t } = useLanguage()
  return (
    <span role="status" className="sr-only">
      {t(ui.common.loading)}
    </span>
  )
}

export function LoadError({ tone = 'light', className }) {
  const { t } = useLanguage()
  return (
    <p
      role="alert"
      className={cn(
        'flex items-start gap-3 rounded-lg border p-4 text-[0.9375rem]',
        tone === 'dark' ? 'border-white/20 text-white/80' : 'border-line text-body',
        className,
      )}
    >
      <CircleAlert className="mt-0.5 size-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
      {t(ui.common.loadError)}
    </p>
  )
}

export function EmptyState({ className }) {
  const { t } = useLanguage()
  return <p className={cn('rounded-lg border border-line p-6 text-muted', className)}>{t(ui.common.empty)}</p>
}
