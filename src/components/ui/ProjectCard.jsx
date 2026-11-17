import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Counter from '@/components/ui/Counter'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { cn } from '@/utils/cn'
import { formatNumber, getYear, localizeDigits } from '@/utils/format'
import Img from './Img'

/**
 * Project summary card. The whole card is one link.
 * `categoryLabel` is passed in so the card does not need the category list.
 * `featured` lets the image grow to fill a taller grid cell on desktop.
 */
export default function ProjectCard({ project, categoryLabel, featured = false, className }) {
  const { t, lang } = useLanguage()
  const ongoing = project.status === 'ongoing'

  const meta = [
    t(project.location),
    ongoing ? t(ui.common.ongoing) : getYear(project.end_date, lang),
    project.area_sft ? `${formatNumber(project.area_sft, lang)} ${t(ui.common.sft)}` : null,
  ].filter(Boolean)

  return (
    <Link to={`/projects/${project.slug}`} className={cn('group flex h-full flex-col', className)}>
      {/*
        On the large featured card the photo fills the remaining height of the
        2×2 grid cell, so this wrapper must also be a growing flex column;
        otherwise the image box collapses to zero height.
      */}
      <div
        className={cn(
          'relative overflow-hidden rounded-xl bg-graphite',
          featured && 'lg:flex lg:min-h-0 lg:flex-1 lg:flex-col',
        )}
      >
        <Img
          src={project.cover_image}
          alt={t(project.cover_alt)}
          className={cn('aspect-4/3 rounded-xl', featured && 'lg:aspect-auto lg:min-h-80 lg:flex-1')}
          imgClassName="transition-transform duration-700 ease-soft group-hover:scale-105"
        />
        {categoryLabel && (
          <span className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-ink/75 px-3 py-1 font-display text-xs font-semibold text-white backdrop-blur-md transition-colors group-hover:border-accent group-hover:bg-accent">
            {categoryLabel}
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 pt-5">
        <div className="min-w-0">
          <h3 className="text-h3 transition-colors duration-200 group-hover:text-accent">{t(project.title)}</h3>
          <p className="mt-1.5 text-[0.9375rem] text-muted">{meta.join(' · ')}</p>
        </div>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden="true" />
        </div>
      </div>

      {ongoing && (
        <div className="mt-4">
          <div
            role="progressbar"
            aria-valuenow={project.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={t(ui.project.progress)}
            className="h-1.5 overflow-hidden rounded-full bg-line"
          >
            <div
              className="h-full bg-accent transition-all duration-500 ease-soft"
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs font-medium text-muted">
            {t(ui.project.progress)}:{' '}
            <span className="tabular-nums font-semibold text-ink">
              <Counter value={project.progress} suffix="%" duration={1200} />
            </span>
          </p>
        </div>
      )}
    </Link>
  )
}
