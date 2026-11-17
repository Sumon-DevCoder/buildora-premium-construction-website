import { cn } from '@/utils/cn'

export default function KpiCard({ label, value, hint, icon: Icon, className }) {
  return (
    <div className={cn('rounded-xl border border-line bg-white p-5', className)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-muted">{label}</p>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-ink tabular-nums">{value}</p>
        </div>
        {Icon && (
          <div className="flex size-10 items-center justify-center rounded-lg bg-sand text-ink">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </div>
        )}
      </div>
      {hint && <p className="mt-3 text-xs text-muted">{hint}</p>}
    </div>
  )
}
