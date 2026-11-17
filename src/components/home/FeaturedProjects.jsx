import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import { EmptyState, LoadError, Skeleton } from '@/components/ui/Feedback'
import FilterTabs from '@/components/ui/FilterTabs'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/hooks/useLanguage'
import { useProjects } from '@/hooks/useProjects'
import { ui } from '@/i18n/ui'
import { cn } from '@/utils/cn'

// Phones: swipe row with the next card peeking. Desktop: 3-column grid.
const ROW =
  'no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-12 md:overflow-visible md:px-0 lg:grid-cols-3'
const CELL = 'w-[82%] shrink-0 snap-start md:w-auto'

/** "Have they built something like mine?" */
export default function FeaturedProjects() {
  const { t } = useLanguage()
  const { projects, categoryLabels, filterOptions, filter, setFilter, loading, error } = useProjects({
    featured: true,
  })

  // With no filter, the first project gets a large 2×2 cell on desktop.
  const showLarge = filter === 'all' && projects.length >= 3

  return (
    <section aria-labelledby="projects-heading" className="bg-white py-18 md:py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow={t(ui.projectsSection.eyebrow)}
          title={t(ui.projectsSection.title)}
          intro={t(ui.projectsSection.intro)}
        />

        {error ? (
          <LoadError className="mt-10" />
        ) : loading ? (
          <div className={cn(ROW, 'mt-10 md:mt-14')}>
            {Array.from({ length: 3 }, (_, index) => (
              <Skeleton key={index} className={cn(CELL, 'aspect-4/3 rounded-xl')} />
            ))}
          </div>
        ) : (
          <>
            <FilterTabs
              className="mt-8 md:mt-10"
              label={t(ui.projectsSection.filterLabel)}
              options={filterOptions}
              value={filter}
              onChange={setFilter}
            />

            {projects.length === 0 ? (
              <EmptyState className="mt-10" />
            ) : (
              <ul className={cn(ROW, 'mt-8 md:mt-12')}>
                {projects.map((project, index) => {
                  const large = showLarge && index === 0
                  return (
                    <li key={project.id} className={cn(CELL, large && 'lg:col-span-2 lg:row-span-2')}>
                      <ProjectCard
                        project={project}
                        categoryLabel={categoryLabels[project.category]}
                        featured={large}
                      />
                    </li>
                  )
                })}
              </ul>
            )}
          </>
        )}

        <Link
          to="/projects"
          className="mt-12 inline-flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-ink"
        >
          {t(ui.projectsSection.viewAll)}
          <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  )
}
