import { Eye, EyeOff, Pencil, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import StatusBadge from '@/components/admin/StatusBadge'
import Button from '@/components/ui/Button'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import ServiceIcon from '@/components/ui/ServiceIcon'
import { useApi } from '@/hooks/useApi'
import { useToast } from '@/hooks/useToast'
import { getAdminServices, saveAdminService } from '@/services/adminApi'

export default function AdminServices() {
  const { data, loading, error } = useApi(getAdminServices, [])
  const { showToast } = useToast()
  const [items, setItems] = useState([])
  const [editing, setEditing] = useState(null)

  useEffect(() => {
    if (data) setItems(data)
  }, [data])

  const toggleVisibility = async (service) => {
    const next = { ...service, is_visible: !service.is_visible }
    await saveAdminService(next)
    setItems((prev) => prev.map((s) => (s.id === service.id ? next : s)))
    showToast(`${service.title.en} ${next.is_visible ? 'shown' : 'hidden'} (demo)`)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    await saveAdminService(editing)
    setItems((prev) => prev.map((s) => (s.id === editing.id ? editing : s)))
    setEditing(null)
    showToast('Service updated (demo)')
  }

  if (error) return <LoadError />

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Services</h1>
        <p className="text-sm text-muted">Toggle visibility on the public site or edit service summaries.</p>
      </div>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} className="h-44 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <div key={service.id} className="flex flex-col justify-between rounded-xl border border-line bg-white p-6">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-sand text-ink">
                    <ServiceIcon name={service.icon} className="size-5" />
                  </div>
                  <StatusBadge
                    status={service.is_visible ? 'visible' : 'hidden'}
                    label={service.is_visible ? 'Visible' : 'Hidden'}
                  />
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">{service.title.en}</h2>
                <p className="mt-1.5 text-sm text-body">{service.summary.en}</p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <button
                  type="button"
                  onClick={() => toggleVisibility(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-accent"
                >
                  {service.is_visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  {service.is_visible ? 'Hide' : 'Show'}
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-accent"
                >
                  <Pencil className="size-3.5" />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 flex justify-end bg-ink/40">
          <div className="flex h-full w-full max-w-md flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h2 className="font-display text-lg font-semibold text-ink">Edit Service</h2>
              <button type="button" onClick={() => setEditing(null)} className="rounded-lg p-1.5 text-muted hover:bg-sand">
                <X className="size-5" />
              </button>
            </div>
            <form onSubmit={handleSave} className="space-y-4 p-6">
              <div>
                <label className="block text-sm font-semibold text-ink">Title (English)</label>
                <input
                  type="text"
                  required
                  value={editing.title.en}
                  onChange={(e) => setEditing({ ...editing, title: { ...editing.title, en: e.target.value } })}
                  className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink">Summary (English)</label>
                <textarea
                  rows={3}
                  required
                  value={editing.summary.en}
                  onChange={(e) => setEditing({ ...editing, summary: { ...editing.summary, en: e.target.value } })}
                  className="mt-1.5 w-full rounded-lg border border-line p-3 text-sm"
                />
              </div>
              <div className="flex justify-end gap-3 border-t border-line pt-4">
                <Button type="button" variant="secondary" onClick={() => setEditing(null)}>
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
