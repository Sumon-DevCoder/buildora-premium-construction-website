/**
 * The only module that knows where public data comes from.
 *
 * Phase 1 (VITE_USE_MOCK=true): static content from src/data.
 * Phase 2 (VITE_USE_MOCK=false): the Laravel API at VITE_API_URL.
 *
 * Pages and components must import from here, never from src/data, so the
 * switch to the real backend needs no changes outside this file.
 */
import {
  faqs,
  processSteps,
  projectCategories,
  projects,
  reasons,
  services,
  stats,
  story,
  team,
  testimonials,
  timeline,
  values,
} from '@/data'

const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false'
const MOCK_DELAY_MS = 250
const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/** Resolve like a network call so loading states are exercised in the demo. */
async function mock(result) {
  await delay(MOCK_DELAY_MS)
  return result
}

async function apiGet(path, params) {
  const { default: http } = await import('./http')
  const response = await http.get(path, { params })
  return response.data.data
}

async function apiPost(path, payload) {
  const { default: http } = await import('./http')
  const response = await http.post(path, payload)
  return response.data
}

export const getServices = () => (USE_MOCK ? mock(services) : apiGet('/services'))

export const getProjectCategories = () =>
  USE_MOCK ? mock(projectCategories) : apiGet('/project-categories')

export function getProjects({ featured = false } = {}) {
  if (!USE_MOCK) return apiGet('/projects', featured ? { featured: 1 } : undefined)
  return mock(featured ? projects.filter((project) => project.is_featured) : projects)
}

/** Resolves to `null` when no project has this slug. */
export function getProject(slug) {
  if (!USE_MOCK) return apiGet(`/projects/${encodeURIComponent(slug)}`)
  return mock(projects.find((project) => project.slug === slug) ?? null)
}

export const getTeam = () => (USE_MOCK ? mock(team) : apiGet('/team'))
export const getTestimonials = () => (USE_MOCK ? mock(testimonials) : apiGet('/testimonials'))
export const getFaqs = () => (USE_MOCK ? mock(faqs) : apiGet('/faqs'))
export const getStats = () => (USE_MOCK ? mock(stats) : apiGet('/stats'))
export const getReasons = () => (USE_MOCK ? mock(reasons) : apiGet('/reasons'))
export const getProcessSteps = () => (USE_MOCK ? mock(processSteps) : apiGet('/process-steps'))
export const getStory = () => (USE_MOCK ? mock(story) : apiGet('/about/story'))
export const getValues = () => (USE_MOCK ? mock(values) : apiGet('/about/values'))
export const getTimeline = () => (USE_MOCK ? mock(timeline) : apiGet('/about/timeline'))

/**
 * Send a public form.
 * - `company_website` is a honeypot: real visitors never see or fill it, so
 *   a value there means a bot. We report success without sending anything.
 * - Without a Web3Forms key the demo simulates success so the flow can still
 *   be shown to a client. Set VITE_WEB3FORMS_KEY to deliver real emails.
 */
async function submitForm({ endpoint, subject, fields }) {
  const { company_website: honeypot, ...payload } = fields
  if (honeypot) return { ok: true }

  if (!USE_MOCK) {
    await apiPost(endpoint, payload)
    return { ok: true }
  }

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
  if (!accessKey) {
    await delay(900)
    return { ok: true, simulated: true }
  }

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: accessKey, subject, from_name: 'Buildora website', ...payload }),
  })
  const result = await response.json().catch(() => null)

  if (!response.ok || !result?.success) {
    throw new Error('The form could not be sent.')
  }
  return { ok: true }
}

export const sendQuote = (fields) =>
  submitForm({ endpoint: '/quotes', subject: 'New quote request', fields })

export const sendMessage = (fields) =>
  submitForm({ endpoint: '/contact', subject: 'New contact message', fields })
