import { useMemo, useState } from 'react'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getProjectCategories, getProjects } from '@/services/api'

const loadFeatured = () => getProjects({ featured: true })
const loadAll = () => getProjects()

/**
 * Projects plus category filtering, shared by the home section and the
 * projects page. Only categories that have projects become filter tabs.
 */
export function useProjects({ featured = false } = {}) {
  const { t } = useLanguage()
  const projectsState = useApi(featured ? loadFeatured : loadAll)
  const categoriesState = useApi(getProjectCategories)
  const [filter, setFilter] = useState('all')

  const projects = projectsState.data
  const categories = categoriesState.data

  const categoryLabels = useMemo(
    () => Object.fromEntries((categories ?? []).map((category) => [category.key, t(category.label)])),
    [categories, t],
  )

  const filterOptions = useMemo(() => {
    const used = new Set((projects ?? []).map((project) => project.category))
    return [
      { key: 'all', label: t(ui.common.all) },
      ...(categories ?? [])
        .filter((category) => used.has(category.key))
        .map((category) => ({ key: category.key, label: t(category.label) })),
    ]
  }, [projects, categories, t])

  const visible = useMemo(
    () => (projects ?? []).filter((project) => filter === 'all' || project.category === filter),
    [projects, filter],
  )

  return {
    projects: visible,
    total: projects?.length ?? 0,
    categoryLabels,
    filterOptions,
    filter,
    setFilter,
    loading: projectsState.loading || categoriesState.loading,
    error: projectsState.error || categoriesState.error,
  }
}
