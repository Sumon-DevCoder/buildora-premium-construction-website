import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, MoveHorizontal } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/seo/JsonLd'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Counter from '@/components/ui/Counter'
import { LoadError, Skeleton } from '@/components/ui/Feedback'
import Img from '@/components/ui/Img'
import ProjectCard from '@/components/ui/ProjectCard'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/config/site'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getProject, getProjectCategories, getProjects } from '@/services/api'
import { cn } from '@/utils/cn'
import { formatBDT, formatDate, formatMonthYear, formatNumber, localizeDigits } from '@/utils/format'

function BeforeAfterSlider({ beforeSrc, afterSrc, beforeLabel, afterLabel }) {
  const [position, setPosition] = useState(50)

  return (
    <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl bg-graphite select-none">
      <img src={afterSrc} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeSrc} alt={beforeLabel} className="h-full w-full object-cover" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md">
          <MoveHorizontal className="size-4" strokeWidth={2} />
        </div>
      </div>

      <input
        type="range"
        min={5}
        max={95}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}

export default function ProjectDetails() {
  const { slug } = useParams()
  const { lang, t } = useLanguage()

  const fetchProject = useCallback(() => getProject(slug), [slug])
  const { data: project, loading, error } = useApi(fetchProject, [slug])
  const { data: categories } = useApi(getProjectCategories, [])
  const { data: allProjects } = useApi(getProjects, [])

  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const categoryLabel = useMemo(() => {
    if (!project || !categories) return project?.category ?? ''
    const match = categories.find((c) => c.key === project.category)
    return match ? t(match.label) : project.category
  }, [project, categories, t])

  const related = useMemo(() => {
    if (!project || !allProjects) return []
    const sameCategory = allProjects.filter((p) => p.slug !== project.slug && p.category === project.category)
    const others = allProjects.filter((p) => p.slug !== project.slug && p.category !== project.category)
    return [...sameCategory, ...others].slice(0, 3)
  }, [project, allProjects])

  const categoryMap = useMemo(() => {
    const map = {}
    for (const item of categories ?? []) map[item.key] = t(item.label)
    return map
  }, [categories, t])

  const origin = site.url || (typeof window !== 'undefined' ? window.location.origin : '')

  if (loading) {
    return (
      <div className="bg-white pt-32 pb-20">
        <Container>
          <Skeleton className="h-12 w-2/3" />
          <Skeleton className="mt-8 aspect-16/9 w-full rounded-xl" />
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <Skeleton className="h-64 rounded-xl lg:col-span-8" />
            <Skeleton className="h-64 rounded-xl lg:col-span-4" />
          </div>
        </Container>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white pt-32 pb-20">
        <Container>
          <LoadError />
        </Container>
      </div>
    )
  }

  if (!project) {
    return (
      <>
        <Seo title={`${t(ui.project.notFoundTitle)} | ${site.name}`} noindex />
        <PageHero
          eyebrow={t(ui.nav.projects)}
          title={t(ui.project.notFoundTitle)}
          crumbs={[{ label: t(ui.nav.projects), to: '/projects' }, { label: t(ui.project.notFoundTitle) }]}
        />
        <section className="bg-white py-16">
          <Container>
            <Button to="/projects" variant="secondary">
              <ArrowLeft className="size-4" strokeWidth={2} aria-hidden="true" />
              {t(ui.project.back)}
            </Button>
          </Container>
        </section>
      </>
    )
  }

  const timelineText = project.end_date
    ? `${formatMonthYear(project.start_date, lang)} – ${formatMonthYear(project.end_date, lang)}`
    : `${formatMonthYear(project.start_date, lang)} – ${t(ui.common.ongoing)}`

  const slides = (project.gallery ?? []).map((item) => ({
    src: item.src,
    alt: t(item.alt),
  }))

  const facts = [
    { label: t(ui.project.client), value: t(project.client_name) },
    { label: t(ui.project.category), value: categoryLabel },
    { label: t(ui.project.location), value: t(project.location) },
    project.area_sft
      ? { label: t(ui.project.area), value: `${formatNumber(project.area_sft, lang)} ${t(ui.common.sft)}` }
      : project.units
        ? { label: t(ui.project.scope), value: t(project.units) }
        : null,
    project.storeys
      ? { label: t(ui.project.storeys), value: localizeDigits(project.storeys, lang) }
      : null,
    project.budget_bdt ? { label: t(ui.project.budget), value: formatBDT(project.budget_bdt, lang) } : null,
    { label: t(ui.project.duration), value: timelineText },
    {
      label: t(ui.project.status),
      value: project.status === 'ongoing' ? t(ui.common.ongoing) : t(ui.common.completed),
    },
  ].filter(Boolean)

  return (
    <>
      <Seo
        title={`${t(project.title)}, ${t(project.location)} – ${site.name}`}
        description={t(project.meta_description)}
        image={project.cover_image}
      />
      <JsonLd
        id={`breadcrumb-project-${project.slug}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t(ui.nav.home), item: `${origin}/` },
            { '@type': 'ListItem', position: 2, name: t(ui.nav.projects), item: `${origin}/projects` },
            {
              '@type': 'ListItem',
              position: 3,
              name: t(project.title),
              item: `${origin}/projects/${project.slug}`,
            },
          ],
        }}
      />

      <PageHero
        eyebrow={categoryLabel}
        title={t(project.title)}
        lead={t(project.subtitle)}
        crumbs={[{ label: t(ui.nav.projects), to: '/projects' }, { label: t(project.title) }]}
        bgImage={project.cover_image}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/75">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
            {t(project.location)}
          </span>
          <span aria-hidden="true">·</span>
          <span>{project.status === 'ongoing' ? t(ui.common.ongoing) : t(ui.common.completed)}</span>
          {project.status === 'ongoing' && (
            <>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">
                <Counter value={project.progress} suffix="%" duration={1200} />
              </span>
            </>
          )}
        </div>
      </PageHero>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <Img
            src={project.cover_image}
            alt={t(project.cover_alt)}
            priority
            className="aspect-16/9 rounded-xl"
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-10 lg:col-span-8">
              {project.status === 'ongoing' && (
                <div className="rounded-xl border border-line bg-sand p-6">
                  <div className="flex items-center justify-between text-sm font-semibold text-ink">
                    <span>{t(ui.project.progress)}</span>
                    <span className="tabular-nums">
                      <Counter value={project.progress} suffix="%" duration={1200} />
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-accent transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <Reveal>
                <h2 className="text-h3">{t(ui.project.overview)}</h2>
                <p className="mt-3 max-w-[68ch] text-body">{t(project.overview)}</p>
              </Reveal>

              <div className="grid gap-8 border-t border-line pt-8 md:grid-cols-2">
                <Reveal>
                  <h2 className="text-h3">{t(ui.project.challenge)}</h2>
                  <p className="mt-3 text-body">{t(project.challenge)}</p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="text-h3">{t(ui.project.solution)}</h2>
                  <p className="mt-3 text-body">{t(project.solution)}</p>
                </Reveal>
              </div>

              {project.before_image && project.after_image && (
                <div className="border-t border-line pt-8">
                  <h2 className="text-h3 mb-4">Before &amp; After</h2>
                  <BeforeAfterSlider
                    beforeSrc={project.before_image}
                    afterSrc={project.after_image}
                    beforeLabel={`${t(project.title)} before`}
                    afterLabel={`${t(project.title)} after`}
                  />
                </div>
              )}

              {slides.length > 0 && (
                <div className="border-t border-line pt-8">
                  <h2 className="text-h3">{t(ui.project.gallery)}</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.src + index}
                        type="button"
                        onClick={() => setLightboxIndex(index)}
                        aria-label={`${t(ui.project.openPhoto)} ${index + 1}`}
                        className="group overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-accent"
                      >
                        <Img
                          src={slide.src}
                          alt={slide.alt}
                          className="aspect-3/2 rounded-xl"
                          imgClassName="transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {project.milestones?.length > 0 && (
                <div className="border-t border-line pt-8">
                  <h2 className="text-h3">{t(ui.project.milestones)}</h2>
                  <ol className="mt-5 space-y-4">
                    {project.milestones.map((milestone, index) => (
                      <li key={index} className="flex items-start gap-3.5">
                        <CheckCircle2
                          className="mt-1 size-5 shrink-0 text-accent"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="font-medium text-ink">{t(milestone.title)}</p>
                          <p className="text-sm text-muted tabular-nums">{formatDate(milestone.date, lang)}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="border-t border-line pt-8">
                <h2 className="text-h3">{t(ui.project.location)}</h2>
                <div className="mt-4 overflow-hidden rounded-xl border border-line bg-sand">
                  <iframe
                    title={`${t(project.title)} map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(project.location.en)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0 md:h-80"
                  />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-xl border border-line bg-sand p-6 md:p-7">
                  <h2 className="text-h3">{t(ui.project.facts)}</h2>
                  <dl className="mt-5 divide-y divide-line">
                    {facts.map((fact) => (
                      <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                        <dt className="text-sm text-muted">{fact.label}</dt>
                        <dd className={cn('mt-0.5 font-medium text-ink tabular-nums')}>{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-xl bg-ink p-6 text-white md:p-7">
                  <h3 className="text-h3 text-white">{t(ui.project.similarTitle)}</h3>
                  <p className="mt-2 text-sm text-white/75">{t(ui.project.similarText)}</p>
                  <Button to="/contact" className="mt-6 w-full">
                    {t(ui.nav.getQuote)}
                    <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                  </Button>
                </div>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                >
                  <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden="true" />
                  {t(ui.project.back)}
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-sand py-16 md:py-24">
          <Container>
            <h2 className="text-h2">{t(ui.project.related)}</h2>
            <ul className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.id}>
                  <ProjectCard project={item} categoryLabel={categoryMap[item.category]} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <Lightbox open={lightboxIndex >= 0} index={lightboxIndex} close={() => setLightboxIndex(-1)} slides={slides} />
    </>
  )
}
