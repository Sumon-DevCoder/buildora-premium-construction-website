import { Pencil, Plus, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import { useApi } from '@/hooks/useApi'
import { useToast } from '@/hooks/useToast'
import { deleteAdminTeamMember, getAdminTeam, saveAdminTeamMember } from '@/services/adminApi'

const EMPTY_MEMBER = { id: null, nameEn: '', roleEn: '', department: 'site', detailEn: '' }

export default function AdminTeam() {
  const { data, loading, error } = useApi(getAdminTeam, [])
  const { showToast } = useToast()
  const [items, setItems] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [form, setForm] = useState(EMPTY_MEMBER)

  useEffect(() => {
    if (data) setItems(data)
  }, [data])

  const openNew = () => {
    setForm(EMPTY_MEMBER)
    setDrawerOpen(true)
  }

  const openEdit = (person) => {
    setForm({
      id: person.id,
      nameEn: person.name.en,
      roleEn: person.role.en,
      department: person.department,
      detailEn: person.detail.en,
    })
    setDrawerOpen(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const payload = {
      id: form.id,
      name: { en: form.nameEn, bn: form.nameEn },
      role: { en: form.roleEn, bn: form.roleEn },
      department: form.department,
      detail: { en: form.detailEn, bn: form.detailEn },
      photo: null,
    }
    const saved = await saveAdminTeamMember(payload)
    setItems((prev) => (form.id ? prev.map((m) => (m.id === form.id ? { ...m, ...saved } : m)) : [...prev, saved]))
    setDrawerOpen(false)
    showToast('Team member saved (demo)')
  }

  const handleDelete = async (id) => {
    await deleteAdminTeamMember(id)
    setItems((prev) => prev.filter((m) => m.id !== id))
    showToast('Team member removed (demo)')
  }

  if (error) return <LoadError />

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Team</h1>
          <p className="text-sm text-muted">Engineers, architects and management displayed on the Team page.</p>
        </div>
        <Button onClick={openNew}>
          <Plus className="size-4" strokeWidth={2} />
          Add Member
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-56 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((person) => (
            <div key={person.id} className="rounded-xl border border-line bg-white p-5">
              <Avatar
                photo={person.photo}
                alt={person.name.en}
                initialsFrom={person.name.en}
                className="aspect-square w-16 rounded-xl text-xl"
              />
              <h2 className="mt-4 font-display text-base font-semibold text-ink">{person.name.en}</h2>
              <p className="text-xs font-medium text-accent">{person.role.en}</p>
              <p className="mt-1 text-xs text-muted">{person.detail.en}</p>

              <div className="mt-4 flex items-center justify-end gap-1 border-t border-line pt-3">
                <button
                  type="button"
                  onClick={() => openEdit(person)}
                  aria-label={`Edit ${person.name.en}`}
                  className="rounded-lg p-1.5 text-muted hover:bg-sand hover:text-ink"
                >
                  <Pencil className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(person.id)}
                  aria-label={`Delete ${person.name.en}`}
                  className="rounded-lg p-1.5 text-muted hover:bg-red-50 hover:text-danger"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-ink/40">
          <div className="flex h-full w-full max-w-md flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h2 className="font-display text-lg font-semibold text-ink">
                {form.id ? 'Edit Team Member' : 'Add Team Member'}
              </h2>
              <button type="button" onClick={() => setDrawerOpen(false)} className="rounded-lg p-1.5 text-muted hover:bg-sand">
                <X className="size-5" />
              </button>
            </div>
            <form onSubmit={handleSave} className="space-y-4 p-6">
              <div>
                <label className="block text-sm font-semibold text-ink">Name</label>
                <input
                  type="text"
                  required
                  value={form.nameEn}
                  onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
                  className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink">Role</label>
                <input
                  type="text"
                  required
                  value={form.roleEn}
                  onChange={(e) => setForm({ ...form, roleEn: e.target.value })}
                  className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink">Department</label>
                <select
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  className="mt-1.5 h-11 w-full rounded-lg border border-line bg-white px-3 text-sm"
                >
                  <option value="management">Management</option>
                  <option value="design">Design &amp; Structural</option>
                  <option value="site">Site &amp; MEP</option>
                  <option value="operations">QS &amp; Operations</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink">Credentials / Experience</label>
                <input
                  type="text"
                  value={form.detailEn}
                  onChange={(e) => setForm({ ...form, detailEn: e.target.value })}
                  className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
                />
              </div>
              <div className="flex justify-end gap-3 border-t border-line pt-4">
                <Button type="button" variant="secondary" onClick={() => setDrawerOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Member</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
