/**
 * Admin API layer.
 * Phase 1: returns mock data and simulates mutations with a short delay.
 * Phase 2: replace with Sanctum-authenticated Laravel endpoints.
 */
import { contactMessages, quoteChartData, quoteRequests } from '@/data/admin'
import { projects, services, team, testimonials } from '@/data'

const DELAY_MS = 180
const wait = () => new Promise((resolve) => setTimeout(resolve, DELAY_MS))

export async function getAdminDashboard() {
  await wait()
  const ongoingProjects = projects.filter((p) => p.status === 'ongoing')
  const categoryCounts = projects.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1
    return acc
  }, {})

  return {
    kpis: {
      totalProjects: projects.length,
      ongoingProjects: ongoingProjects.length,
      newQuotes: quoteRequests.filter((q) => q.status === 'new').length,
      unreadMessages: contactMessages.filter((m) => !m.read).length,
    },
    quoteChart: quoteChartData,
    categoryChart: Object.entries(categoryCounts).map(([name, value]) => ({ name, value })),
    recentQuotes: quoteRequests.slice(0, 4),
    ongoingProjects,
  }
}

export async function getAdminProjects() {
  await wait()
  return [...projects]
}

export async function saveAdminProject(project) {
  await wait()
  return { ...project, id: project.id || Date.now() }
}

export async function deleteAdminProject(id) {
  await wait()
  return { deleted: id }
}

export async function getAdminServices() {
  await wait()
  return services.map((s) => ({ ...s, is_visible: true }))
}

export async function saveAdminService(service) {
  await wait()
  return { ...service }
}

export async function getAdminTeam() {
  await wait()
  return [...team]
}

export async function saveAdminTeamMember(member) {
  await wait()
  return { ...member, id: member.id || Date.now() }
}

export async function deleteAdminTeamMember(id) {
  await wait()
  return { deleted: id }
}

export async function getAdminTestimonials() {
  await wait()
  return testimonials.map((item) => ({ ...item, is_approved: true }))
}

export async function getAdminQuotes() {
  await wait()
  return [...quoteRequests]
}

export async function updateAdminQuoteStatus(id, status) {
  await wait()
  return { id, status }
}

export async function getAdminMessages() {
  await wait()
  return [...contactMessages]
}

export async function saveAdminSettings(settings) {
  await wait()
  return { ...settings }
}
