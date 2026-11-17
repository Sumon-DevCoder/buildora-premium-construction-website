import { useState } from 'react'
import Button from '@/components/ui/Button'
import { site } from '@/config/site'
import { useToast } from '@/hooks/useToast'
import { saveAdminSettings } from '@/services/adminApi'

const PRESET_COLORS = [
  { label: 'Burnt Orange (Default)', accent: '#C2410C', hover: '#9A3412' },
  { label: 'Steel Blue', accent: '#1D4ED8', hover: '#1E40AF' },
  { label: 'Emerald', accent: '#15803D', hover: '#166534' },
  { label: 'Graphite', accent: '#111315', hover: '#2A2E33' },
]

const TABS = [
  { key: 'general', label: 'General & Brand Color' },
  { key: 'contact', label: 'Contact & Hours' },
  { key: 'seo', label: 'SEO' },
]

export default function AdminSettings() {
  const { showToast } = useToast()
  const [tab, setTab] = useState('general')
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    name: site.name,
    tagline: site.tagline.en,
    accent: '#C2410C',
    phone: site.phone.display,
    email: site.email.display,
    address: site.address.en,
    hours: site.hours.en,
    seoTitle: 'Buildora – Construction Company in Dhaka, Bangladesh',
    seoDescription:
      'Trusted building, civil and road contractor in Dhaka since 2012. Joint venture, RAJUK design support and interior work.',
  })

  const applyBrandColor = (accent, hover) => {
    setForm((prev) => ({ ...prev, accent }))
    document.documentElement.style.setProperty('--color-accent', accent)
    document.documentElement.style.setProperty('--color-accent-hover', hover || accent)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    await saveAdminSettings(form)
    setSaving(false)
    showToast('Settings saved (demo)')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Settings</h1>
        <p className="text-sm text-muted">
          Configure company details or test a different brand accent color live.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-line pb-3">
        {TABS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setTab(item.key)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              tab === item.key ? 'bg-ink text-white' : 'text-body hover:bg-white hover:text-ink'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSave} className="max-w-2xl rounded-xl border border-line bg-white p-6 space-y-5">
        {tab === 'general' && (
          <>
            <div>
              <label className="block text-sm font-semibold text-ink">Company Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">Tagline</label>
              <input
                type="text"
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-ink">Brand Accent Color (live preview)</p>
              <p className="mt-0.5 text-xs text-muted">
                Click a swatch or pick any color to preview how rebranding looks across buttons and active states.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {PRESET_COLORS.map((preset) => (
                  <button
                    key={preset.accent}
                    type="button"
                    onClick={() => applyBrandColor(preset.accent, preset.hover)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium ${
                      form.accent.toLowerCase() === preset.accent.toLowerCase()
                        ? 'border-ink bg-sand text-ink'
                        : 'border-line text-body hover:border-ink'
                    }`}
                  >
                    <span className="size-4 rounded-full" style={{ backgroundColor: preset.accent }} />
                    {preset.label}
                  </button>
                ))}
                <input
                  type="color"
                  aria-label="Custom brand color"
                  value={form.accent}
                  onChange={(e) => applyBrandColor(e.target.value, e.target.value)}
                  className="h-9 w-12 cursor-pointer rounded border border-line bg-white p-0.5"
                />
              </div>
            </div>
          </>
        )}

        {tab === 'contact' && (
          <>
            <div>
              <label className="block text-sm font-semibold text-ink">Phone / WhatsApp</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink">Office Address</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink">Office Hours</label>
              <input
                type="text"
                value={form.hours}
                onChange={(e) => setForm({ ...form, hours: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
              />
            </div>
          </>
        )}

        {tab === 'seo' && (
          <>
            <div>
              <label className="block text-sm font-semibold text-ink">Default Meta Title</label>
              <input
                type="text"
                value={form.seoTitle}
                onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-line px-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink">Default Meta Description</label>
              <textarea
                rows={3}
                value={form.seoDescription}
                onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-line p-3 text-sm"
              />
            </div>
          </>
        )}

        <div className="border-t border-line pt-4">
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving…' : 'Save Settings'}
          </Button>
        </div>
      </form>
    </div>
  )
}
