import { Pencil, Plus, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import StatusBadge from '@/components/admin/StatusBadge'
import Button from '@/components/ui/Button'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import { useApi } from '@/hooks/useApi'
import { useToast } from '@/hooks/useToast'
import { deleteAdminProject, getAdminProjects, saveAdminProject } from '@/services/adminApi'
import { formatBDT } from '@/utils/format'

const EMPTY_FORM = {
  id: null,
  titleEn: '',
  titleBn: '',
  category: 'residential',
  locationEn: '',
  status: 'ongoing',
  progress: 50,
  budget_bdt: 100000000,
  cover_image: '/images/projects/shanti-niloy-residential-building-bashundhara-dhaka.webp',
}

export default function AdminProjects() {
  const { data, loading, error } = useApi(getAdminProjects, [])
  const { showToast } = useToast()
  const [items, setItems] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (data) setItems(data)
  }, [data])

  const openNew = () => {
    setForm(EMPTY_FORM)
    setDrawerOpen(true)
  }

  const openEdit = (project) => {
    setForm({
      id: project.id,
      titleEn: project.title.en,
      titleBn: project.title.bn ?? '',
      category: project.category,
      locationEn: project.location.en,
      status: project.status,
      progress: project.progress ?? 100,
      budget_bdt: project.budget_bdt ?? 0,
      cover_image: project.cover_image,
    })
    setDrawerOpen(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    const payload = {
      id: form.id,
      slug: form.titleEn.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: { en: form.titleEn, bn: form.titleBn || form.titleEn },
      category: form.category,
      location: { en: form.locationEn, bn: form.locationEn },
      status: form.status,
      progress: form.status === 'completed' ? 100 : Number(form.progress),
      budget_bdt: Number(form.budget_bdt),
      cover_image: form.cover_image,
    }
    const saved = await saveAdminProject(payload)
    setItems((prev) => (form.id ? prev.map((p) => (p.id === form.id ? { ...p, ...saved } : p)) : [saved, ...prev]))
    setSaving(false)
    setDrawerOpen(false)
    showToast('Project saved (demo)')
  }

  const handleDelete = async (id) => {
    await deleteAdminProject(id)
    setItems((prev) => prev.filter((p) => p.id !== id))
    showToast('Project deleted (demo)')
  }

  if (error) return <LoadError />

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Projects</h1>
          <p className="text-sm text-muted">Add, edit or update progress for portfolio projects.</p>
        </div>
        <Button onClick={openNew}>
          <Plus className="size-4" strokeWidth={2} />
          Add Project
        </Button>
      </div>

      {loading ? (
        <Skeleton className="h-96 rounded-xl" />
      ) : (
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[620px] w-full text-left text-sm">
              <thead className="border-b border-line bg-sand/60 text-xs text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Project</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Value</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Progress</th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {items.map((project) => (
                  <tr key={project.id} className="hover:bg-sand/30">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={project.cover_image}
                          alt=""
                          className="size-11 shrink-0 rounded-lg bg-sand object-cover"
                        />
                        <div>
                          <p className="font-semibold text-ink">{project.title.en}</p>
                          <p className="text-xs text-muted">{project.location.en}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 capitalize text-body">{project.category}</td>
                    <td className="px-4 py-3 text-body tabular-nums">{formatBDT(project.budget_bdt)}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={project.status} />
                    </td>
                    <td className="px-4 py-3 tabular-nums text-body">{project.progress}%</td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => openEdit(project)}
                          aria-label={`Edit ${project.title.en}`}
                          className="rounded-lg p-2 text-muted hover:bg-sand hover:text-ink"
                        >
                          <Pencil className="size-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(project.id)}
                          aria-label={`Delete ${project.title.en}`}
                          className="rounded-lg p-2 text-muted hover:bg-red-50 hover:text-danger"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-ink/40">
          <div className="flex h-full w-full max-w-md flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h2 className="font-display text-lg font-semibold text-ink">
                {form.id ? 'Edit Project' : 'Add Project'}
              </h2>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close drawer"
                className="rounded-lg p-1.5 text-muted hover:bg-sand hover:text-ink"
              >
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="flex-1 space-y-4 overflow-y-auto p-6">
              <div>
                <label className="block text-sm font-semibold text-ink">Project Title (English)</label>
                <input
                  type="text"
                  required
                  value={form.titleEn}
                  onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                  className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink">Project Title (Bangla)</label>
                <input
                  type="text"
                  value={form.titleBn}
                  onChange={(e) => setForm({ ...form, titleBn: e.target.value })}
                  className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink">Location</label>
                <input
                  type="text"
                  required
                  value={form.locationEn}
                  onChange={(e) => setForm({ ...form, locationEn: e.target.value })}
                  className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-ink">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="mt-1.5 h-11 w-full rounded-lg border border-line bg-white px-3 text-sm"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="industrial">Industrial</option>
                    <option value="interior">Interior</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="mt-1.5 h-11 w-full rounded-lg border border-line bg-white px-3 text-sm"
                  >
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-ink">Budget (BDT)</label>
                  <input
                    type="number"
                    value={form.budget_bdt}
                    onChange={(e) => setForm({ ...form, budget_bdt: e.target.value })}
                    className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink">Progress (%)</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={form.status === 'completed' ? 100 : form.progress}
                    disabled={form.status === 'completed'}
                    onChange={(e) => setForm({ ...form, progress: e.target.value })}
                    className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-line pt-5">
                <Button type="button" variant="secondary" onClick={() => setDrawerOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving ? 'Saving…' : 'Save Project'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
