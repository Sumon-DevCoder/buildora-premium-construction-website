import { ArrowRight, Clock, FileText, FolderKanban, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import KpiCard from '@/components/admin/KpiCard'
import StatusBadge from '@/components/admin/StatusBadge'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import { useApi } from '@/hooks/useApi'
import { getAdminDashboard } from '@/services/adminApi'

const PIE_COLORS = ['#111315', '#C2410C', '#43484E', '#6B7075', '#9A3412']

export default function AdminDashboard() {
  const { data, loading, error } = useApi(getAdminDashboard, [])

  if (error) return <LoadError />

  if (loading || !data) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Skeleton className="h-80 rounded-xl lg:col-span-2" />
          <Skeleton className="h-80 rounded-xl" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Dashboard Overview</h1>
          <p className="text-sm text-muted">Summary of projects, quote requests and client messages.</p>
        </div>
        <Link
          to="/admin/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          Manage projects
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Total Projects" value={data.kpis.totalProjects} hint="Across 18 districts" icon={FolderKanban} />
        <KpiCard label="Ongoing Sites" value={data.kpis.ongoingProjects} hint="Active construction" icon={Clock} />
        <KpiCard label="New Quotes" value={data.kpis.newQuotes} hint="Awaiting engineer call" icon={FileText} />
        <KpiCard label="Unread Messages" value={data.kpis.unreadMessages} hint="Contact inbox" icon={Mail} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-line bg-white p-6 lg:col-span-2">
          <h2 className="font-display text-base font-semibold text-ink">Quote requests per month</h2>
          <p className="mt-0.5 text-xs text-muted">Last 6 months (demo trend)</p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.quoteChart}>
                <defs>
                  <linearGradient id="quoteFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C2410C" stopOpacity={0.22} />
                    <stop offset="95%" stopColor="#C2410C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E6E3DE" vertical={false} />
                <XAxis dataKey="month" stroke="#6B7075" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#6B7075" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="quotes"
                  stroke="#C2410C"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#quoteFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-white p-6">
          <h2 className="font-display text-base font-semibold text-ink">Projects by category</h2>
          <p className="mt-0.5 text-xs text-muted">Portfolio distribution</p>
          <div className="mt-4 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.categoryChart}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={48}
                  outerRadius={76}
                  paddingAngle={3}
                >
                  {data.categoryChart.map((entry, idx) => (
                    <Cell key={entry.name} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-xs">
            {data.categoryChart.map((entry, idx) => (
              <li key={entry.name} className="flex items-center gap-2 capitalize text-body">
                <span
                  className="size-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: PIE_COLORS[idx % PIE_COLORS.length] }}
                />
                <span>
                  {entry.name} ({entry.value})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-ink">Recent quote requests</h2>
            <Link to="/admin/quotes" className="text-xs font-semibold text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs text-muted">
                  <th className="pb-2.5 font-medium">Client</th>
                  <th className="pb-2.5 font-medium">Location</th>
                  <th className="pb-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {data.recentQuotes.map((q) => (
                  <tr key={q.id}>
                    <td className="py-3">
                      <p className="font-medium text-ink">{q.name}</p>
                      <p className="text-xs text-muted capitalize">{q.project_type.replace('_', ' ')}</p>
                    </td>
                    <td className="py-3 text-body">{q.location}</td>
                    <td className="py-3">
                      <StatusBadge status={q.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-ink">Ongoing projects</h2>
            <Link to="/admin/projects" className="text-xs font-semibold text-accent hover:underline">
              Manage
            </Link>
          </div>
          <div className="mt-4 space-y-5">
            {data.ongoingProjects.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <div>
                    <p className="font-medium text-ink">{project.title.en}</p>
                    <p className="text-xs text-muted">{project.location.en}</p>
                  </div>
                  <span className="font-semibold text-ink tabular-nums">{project.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-sand">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
