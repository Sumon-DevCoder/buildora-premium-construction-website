import { X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import StatusBadge from '@/components/admin/StatusBadge'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import { useApi } from '@/hooks/useApi'
import { useToast } from '@/hooks/useToast'
import { getAdminQuotes, updateAdminQuoteStatus } from '@/services/adminApi'

const STATUSES = ['all', 'new', 'contacted', 'won', 'lost']

export default function AdminQuotes() {
  const { data, loading, error } = useApi(getAdminQuotes, [])
  const { showToast } = useToast()
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (data) setItems(data)
  }, [data])

  const filtered = useMemo(
    () => (filter === 'all' ? items : items.filter((q) => q.status === filter)),
    [items, filter],
  )

  const changeStatus = async (id, status) => {
    await updateAdminQuoteStatus(id, status)
    setItems((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)))
    if (selected?.id === id) setSelected((prev) => ({ ...prev, status }))
    showToast(`Quote marked as ${status} (demo)`)
  }

  if (error) return <LoadError />

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Quote Requests</h1>
          <p className="text-sm text-muted">Leads submitted from the multi-step quote form.</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
                filter === s ? 'bg-ink text-white' : 'border border-line bg-white text-body hover:text-ink'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <Skeleton className="h-80 rounded-xl" />
      ) : (
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[620px] w-full text-left text-sm">
              <thead className="border-b border-line bg-sand/60 text-xs text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Client</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">Size</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((q) => (
                  <tr
                    key={q.id}
                    onClick={() => setSelected(q)}
                    className="cursor-pointer hover:bg-sand/40"
                  >
                    <td className="px-4 py-3">
                      <p className="font-semibold text-ink">{q.name}</p>
                      <p className="text-xs text-muted tabular-nums">{q.phone}</p>
                    </td>
                    <td className="px-4 py-3 capitalize text-body">{q.project_type.replace('_', ' ')}</td>
                    <td className="px-4 py-3 text-body">{q.location}</td>
                    <td className="px-4 py-3 text-body">{q.area_size}</td>
                    <td className="px-4 py-3 text-xs text-muted tabular-nums">{q.created_at}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={q.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end bg-ink/40">
          <div className="flex h-full w-full max-w-md flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h2 className="font-display text-lg font-semibold text-ink">Quote Details</h2>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close drawer"
                className="rounded-lg p-1.5 text-muted hover:bg-sand"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold text-ink">{selected.name}</p>
                  <p className="text-sm text-muted tabular-nums">{selected.phone}</p>
                </div>
                <StatusBadge status={selected.status} />
              </div>

              <dl className="divide-y divide-line rounded-xl border border-line bg-sand/40 p-4 text-sm">
                <div className="flex justify-between py-2">
                  <dt className="text-muted">Project Type</dt>
                  <dd className="font-medium capitalize text-ink">{selected.project_type.replace('_', ' ')}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-muted">Location</dt>
                  <dd className="font-medium text-ink">{selected.location}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-muted">Size</dt>
                  <dd className="font-medium text-ink">{selected.area_size}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-muted">Budget</dt>
                  <dd className="font-medium capitalize text-ink">{selected.budget_range.replace(/_/g, ' ')}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-muted">Received</dt>
                  <dd className="font-medium text-ink tabular-nums">{selected.created_at}</dd>
                </div>
              </dl>

              {selected.message && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Notes</p>
                  <p className="mt-1.5 text-sm text-body">{selected.message}</p>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Update Status</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {['new', 'contacted', 'won', 'lost'].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => changeStatus(selected.id, status)}
                      className={`h-10 rounded-lg border text-xs font-semibold capitalize transition-colors ${
                        selected.status === status
                          ? 'border-ink bg-ink text-white'
                          : 'border-line bg-white text-ink hover:bg-sand'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
