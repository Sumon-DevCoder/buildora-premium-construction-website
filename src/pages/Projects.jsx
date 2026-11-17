import { Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import FinalCta from '@/components/home/FinalCta'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/seo/JsonLd'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { EmptyState, LoadError, Skeleton } from '@/components/ui/Feedback'
import FilterTabs from '@/components/ui/FilterTabs'
import ProjectCard from '@/components/ui/ProjectCard'
import { site } from '@/config/site'
import { useLanguage } from '@/hooks/useLanguage'
import { useProjects } from '@/hooks/useProjects'
import { ui } from '@/i18n/ui'
import { localizeDigits } from '@/utils/format'

const PAGE_SIZE = 6

export default function Projects() {
  const { lang, t } = useLanguage()
  const { projects, categoryLabels, filterOptions, filter, setFilter, loading, error } = useProjects()
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const origin = site.url || (typeof window !== 'undefined' ? window.location.origin : '')

  const searched = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return projects
    return projects.filter((project) => {
      const hay = [
        project.title?.en,
        project.title?.bn,
        project.location?.en,
        project.location?.bn,
        project.subtitle?.en,
        project.subtitle?.bn,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return hay.includes(trimmed)
    })
  }, [projects, query])

  const shown = searched.slice(0, visibleCount)
  const hasMore = shown.length < searched.length

  const handleFilterChange = (next) => {
    setFilter(next)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <>
      <Seo title={t(ui.pages.projects.seoTitle)} description={t(ui.pages.projects.seoDescription)} />
      <JsonLd
        id="breadcrumb-projects"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t(ui.nav.home), item: `${origin}/` },
            { '@type': 'ListItem', position: 2, name: t(ui.nav.projects), item: `${origin}/projects` },
          ],
        }}
      />

      <PageHero
        eyebrow={t(ui.pages.projects.eyebrow)}
        title={t(ui.pages.projects.title)}
        lead={t(ui.pages.projects.lead)}
        crumbs={[{ label: t(ui.nav.projects) }]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          {error ? (
            <LoadError />
          ) : loading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }, (_, index) => (
                <Skeleton key={index} className="aspect-4/3 rounded-xl" />
              ))}
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-6 border-b border-line pb-6 lg:flex-row lg:items-center lg:justify-between">
                <FilterTabs
                  label={t(ui.projectsSection.filterLabel)}
                  options={filterOptions}
                  value={filter}
                  onChange={handleFilterChange}
                />

                <div className="relative w-full lg:w-72">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={lang === 'bn' ? 'প্রকল্প বা এলাকা খুঁজুন…' : 'Search project or area…'}
                    aria-label={lang === 'bn' ? 'প্রকল্প খুঁজুন' : 'Search projects'}
                    className="h-12 w-full rounded-lg border border-line bg-white pl-10 pr-9 text-[0.9375rem] text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      aria-label={lang === 'bn' ? 'খোঁজা মুছুন' : 'Clear search'}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-muted hover:text-ink"
                    >
                      <X className="size-4" strokeWidth={1.75} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>

              <p className="mt-6 text-sm text-muted tabular-nums">
                {localizeDigits(searched.length, lang)} {t(ui.pages.projects.count)}
              </p>

              {shown.length === 0 ? (
                <EmptyState className="mt-8" />
              ) : (
                <>
                  <ul className="mt-8 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                    {shown.map((project) => (
                      <li key={project.id}>
                        <ProjectCard project={project} categoryLabel={categoryLabels[project.category]} />
                      </li>
                    ))}
                  </ul>

                  {hasMore && (
                    <div className="mt-14 flex justify-center">
                      <Button variant="secondary" onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}>
                        {lang === 'bn' ? 'আরও প্রকল্প দেখুন' : 'Load more projects'}
                      </Button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </Container>
      </section>

      <FinalCta />
    </>
  )
}
