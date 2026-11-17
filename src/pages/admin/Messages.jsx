import { Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import { useApi } from '@/hooks/useApi'
import { getAdminMessages } from '@/services/adminApi'
import { cn } from '@/utils/cn'

export default function AdminMessages() {
  const { data, loading, error } = useApi(getAdminMessages, [])
  const [items, setItems] = useState([])
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (data) {
      setItems(data)
      if (data.length > 0) setActiveId(data[0].id)
    }
  }, [data])

  const selectMessage = (msg) => {
    setActiveId(msg.id)
    if (!msg.read) {
      setItems((prev) => prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m)))
    }
  }

  const active = items.find((m) => m.id === activeId)

  if (error) return <LoadError />

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Messages</h1>
        <p className="text-sm text-muted">General inquiries from visitors.</p>
      </div>

      {loading ? (
        <Skeleton className="h-96 rounded-xl" />
      ) : (
        <div className="grid overflow-hidden rounded-xl border border-line bg-white lg:grid-cols-12">
          <div className="divide-y divide-line border-b border-line lg:col-span-5 lg:border-b-0 lg:border-r">
            {items.map((msg) => (
              <button
                key={msg.id}
                type="button"
                onClick={() => selectMessage(msg)}
                className={cn(
                  'block w-full p-4 text-left transition-colors hover:bg-sand/50',
                  activeId === msg.id && 'bg-sand',
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 font-display text-sm font-semibold text-ink">
                    {!msg.read && <span className="size-2 rounded-full bg-accent" />}
                    {msg.name}
                  </span>
                  <span className="text-xs text-muted tabular-nums">{msg.created_at}</span>
                </div>
                <p className="mt-1 truncate text-sm font-medium text-ink">{msg.subject}</p>
                <p className="mt-0.5 truncate text-xs text-muted">{msg.body}</p>
              </button>
            ))}
          </div>

          <div className="p-6 lg:col-span-7">
            {active ? (
              <div>
                <div className="border-b border-line pb-4">
                  <h2 className="font-display text-xl font-bold text-ink">{active.subject}</h2>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted">
                    <span className="font-semibold text-ink">{active.name}</span>
                    <span className="inline-flex items-center gap-1">
                      <Mail className="size-3.5" />
                      {active.email}
                    </span>
                    <span className="inline-flex items-center gap-1 tabular-nums">
                      <Phone className="size-3.5" />
                      {active.phone}
                    </span>
                  </div>
                </div>
                <p className="mt-6 max-w-prose text-sm leading-relaxed text-body">{active.body}</p>
              </div>
            ) : (
              <p className="text-sm text-muted">Select a message to read.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
