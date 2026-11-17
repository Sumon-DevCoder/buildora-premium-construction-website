import { cn } from '@/utils/cn'

/**
 * Text tabs with an underline for the active one. Scrolls sideways on
 * phones instead of wrapping onto several rows.
 * `options` is a list of `{ key, label }`.
 */
export default function FilterTabs({ options, value, onChange, label, className }) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn('no-scrollbar -mx-4 flex gap-1 overflow-x-auto border-b border-line px-4 md:mx-0 md:px-0', className)}
    >
      {options.map((option) => {
        const active = option.key === value
        return (
          <button
            key={option.key}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.key)}
            className={cn(
              '-mb-px h-12 shrink-0 border-b-2 px-4 font-display text-[0.9375rem] font-semibold transition-colors',
              active ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
