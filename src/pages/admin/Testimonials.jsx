import { Eye, EyeOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import StatusBadge from '@/components/admin/StatusBadge'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import { useApi } from '@/hooks/useApi'
import { useToast } from '@/hooks/useToast'
import { getAdminTestimonials } from '@/services/adminApi'

export default function AdminTestimonials() {
  const { data, loading, error } = useApi(getAdminTestimonials, [])
  const { showToast } = useToast()
  const [items, setItems] = useState([])

  useEffect(() => {
    if (data) setItems(data)
  }, [data])

  const toggleApprove = (item) => {
    const next = !item.is_approved
    setItems((prev) => prev.map((t) => (t.id === item.id ? { ...t, is_approved: next } : t)))
    showToast(`Testimonial ${next ? 'approved' : 'hidden'} (demo)`)
  }

  if (error) return <LoadError />

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Testimonials</h1>
        <p className="text-sm text-muted">Approve or hide client reviews shown on the homepage.</p>
      </div>

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-4 rounded-xl border border-line bg-white p-6 sm:flex-row sm:items-start"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <p className="font-display font-semibold text-ink">{item.name.en}</p>
                  <StatusBadge
                    status={item.is_approved ? 'visible' : 'hidden'}
                    label={item.is_approved ? 'Approved' : 'Hidden'}
                  />
                </div>
                <p className="text-xs text-muted">
                  {item.role.en} · {item.location.en}
                </p>
                <p className="mt-3 text-sm text-body">“{item.quote.en}”</p>
              </div>

              <button
                type="button"
                onClick={() => toggleApprove(item)}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink hover:bg-sand"
              >
                {item.is_approved ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                {item.is_approved ? 'Hide' : 'Approve'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
