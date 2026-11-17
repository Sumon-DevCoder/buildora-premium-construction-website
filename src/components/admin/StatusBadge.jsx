import { cn } from '@/utils/cn'

const STYLES = {
  completed: 'bg-emerald-50 text-success border-emerald-200',
  ongoing: 'bg-amber-50 text-warning border-amber-200',
  new: 'bg-blue-50 text-info border-blue-200',
  contacted: 'bg-amber-50 text-warning border-amber-200',
  won: 'bg-emerald-50 text-success border-emerald-200',
  lost: 'bg-red-50 text-danger border-red-200',
  visible: 'bg-emerald-50 text-success border-emerald-200',
  hidden: 'bg-sand text-muted border-line',
}

export default function StatusBadge({ status, label }) {
  const style = STYLES[status] ?? 'bg-sand text-ink border-line'
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize',
        style,
      )}
    >
      {label ?? status}
    </span>
  )
}
