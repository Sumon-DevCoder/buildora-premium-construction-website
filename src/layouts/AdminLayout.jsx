import {
  Bell,
  Building2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  MessageSquareQuote,
  Search,
  Settings,
  Users,
  Wrench,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/utils/cn'

const NAV_ITEMS = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { to: '/admin/services', label: 'Services', icon: Wrench },
  { to: '/admin/team', label: 'Team', icon: Users },
  { to: '/admin/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { to: '/admin/quotes', label: 'Quote Requests', icon: FileText },
  { to: '/admin/messages', label: 'Messages', icon: Mail },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout() {
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="flex min-h-screen bg-sand text-ink">
      <Seo title="Admin Preview | Buildora" noindex />

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-ink/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex flex-col bg-graphite text-white transition-all duration-200 lg:static',
          collapsed ? 'w-20' : 'w-64',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          <Link to="/admin" className="flex items-center gap-2.5 font-display font-bold tracking-tight text-white">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
              <Building2 className="size-4" strokeWidth={2} aria-hidden="true" />
            </span>
            {!collapsed && <span>BUILDORA</span>}
          </Link>

          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="hidden rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white lg:inline-flex"
          >
            {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
            className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav aria-label="Admin navigation" className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-white/75 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            )
          })}
        </nav>

        <div className="space-y-1 border-t border-white/10 p-3">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ExternalLink className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            {!collapsed && <span>View Public Site</span>}
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LogOut className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            {!collapsed && <span>Sign out</span>}
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-line bg-white px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              className="rounded-lg p-2 text-ink hover:bg-sand lg:hidden"
            >
              <Menu className="size-5" />
            </button>

            <div className="relative hidden sm:block sm:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Quick search (demo)…"
                aria-label="Quick search"
                className="h-10 w-full rounded-lg border border-line bg-sand/50 pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:border-ink focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent sm:inline-block">
              Demo Preview
            </span>
            <Link
              to="/admin/quotes"
              aria-label="New quote notifications"
              className="relative rounded-lg p-2 text-ink hover:bg-sand"
            >
              <Bell className="size-5" strokeWidth={1.75} />
              <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-accent" />
            </Link>
            <div className="flex items-center gap-2.5 border-l border-line pl-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-white">
                RI
              </div>
              <div className="hidden text-left text-xs md:block">
                <p className="font-semibold text-ink">{user?.name}</p>
                <p className="text-muted">{user?.role}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
