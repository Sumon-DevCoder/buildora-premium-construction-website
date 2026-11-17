import { useMemo, useState } from 'react'
import FinalCta from '@/components/home/FinalCta'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/seo/JsonLd'
import Seo from '@/components/seo/Seo'
import Avatar from '@/components/ui/Avatar'
import Container from '@/components/ui/Container'
import { EmptyState, LoadError, Skeleton } from '@/components/ui/Feedback'
import FilterTabs from '@/components/ui/FilterTabs'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/config/site'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getTeam } from '@/services/api'

const DEPARTMENTS = [
  { key: 'all', label: { en: 'All', bn: 'সবাই' } },
  { key: 'management', label: { en: 'Management', bn: 'ব্যবস্থাপনা' } },
  { key: 'design', label: { en: 'Design & Structural', bn: 'নকশা ও স্ট্রাকচারাল' } },
  { key: 'site', label: { en: 'Site & MEP', bn: 'সাইট ও এমইপি' } },
  { key: 'operations', label: { en: 'QS & Operations', bn: 'কিউএস ও অপারেশনস' } },
]

export default function Team() {
  const { t } = useLanguage()
  const { data: team, loading, error } = useApi(getTeam, [])
  const [department, setDepartment] = useState('all')

  const origin = site.url || (typeof window !== 'undefined' ? window.location.origin : '')

  const leadership = useMemo(() => (team ?? []).find((person) => person.is_leadership), [team])

  const filtered = useMemo(() => {
    const list = team ?? []
    if (department === 'all') return list
    return list.filter((person) => person.department === department)
  }, [team, department])

  const filterOptions = useMemo(
    () => DEPARTMENTS.map((d) => ({ key: d.key, label: t(d.label) })),
    [t],
  )

  return (
    <>
      <Seo title={t(ui.pages.team.seoTitle)} description={t(ui.pages.team.seoDescription)} />
      <JsonLd
        id="breadcrumb-team"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t(ui.nav.home), item: `${origin}/` },
            { '@type': 'ListItem', position: 2, name: t(ui.nav.team), item: `${origin}/team` },
          ],
        }}
      />

      <PageHero
        eyebrow={t(ui.pages.team.eyebrow)}
        title={t(ui.pages.team.title)}
        lead={t(ui.pages.team.lead)}
        crumbs={[{ label: t(ui.nav.team) }]}
        bgImage="/images/about/site-engineers-in-safety-vests.webp"
      />

      {leadership && (
        <section className="bg-sand py-16 md:py-24">
          <Container>
            <p className="eyebrow text-muted">{t(ui.pages.team.leadership)}</p>
            <div className="mt-6 grid items-center gap-8 rounded-xl border border-line bg-white p-6 md:grid-cols-12 md:p-10">
              <div className="md:col-span-4 lg:col-span-3">
                <Avatar
                  photo={leadership.photo}
                  alt={t(leadership.name)}
                  initialsFrom={leadership.name.en}
                  className="aspect-4/5 w-full rounded-xl"
                />
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <h2 className="text-h2">{t(leadership.name)}</h2>
                <p className="mt-1 font-medium text-accent">{t(leadership.role)}</p>
                <p className="mt-1 text-sm text-muted">{t(leadership.detail)}</p>
                {leadership.message && (
                  <blockquote className="mt-6 max-w-[62ch] border-l-2 border-accent pl-5 text-lead text-ink">
                    “{t(leadership.message)}”
                  </blockquote>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-h2">{t(ui.pages.team.members)}</h2>
            <FilterTabs
              label="Filter team by department"
              options={filterOptions}
              value={department}
              onChange={setDepartment}
            />
          </div>

          {error ? (
            <LoadError className="mt-10" />
          ) : loading ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 8 }, (_, index) => (
                <Skeleton key={index} className="aspect-4/5 rounded-xl" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState className="mt-10" />
          ) : (
            <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((person, index) => (
                <Reveal as="li" key={person.id} delay={index * 0.04}>
                  <Avatar
                    photo={person.photo}
                    alt={t(person.name)}
                    initialsFrom={person.name.en}
                    className="aspect-4/5 w-full rounded-xl"
                  />
                  <h3 className="text-h3 mt-4">{t(person.name)}</h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">{t(person.role)}</p>
                  <p className="mt-1 text-sm text-muted">{t(person.detail)}</p>
                </Reveal>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <FinalCta />
    </>
  )
}
