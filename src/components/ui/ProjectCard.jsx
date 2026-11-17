import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
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
      <Img
        src={project.cover_image}
        alt={t(project.cover_alt)}
        className={cn('aspect-4/3 rounded-xl', featured && 'lg:aspect-auto lg:min-h-0 lg:flex-1')}
        imgClassName="transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
      />

      <div className="flex items-start justify-between gap-4 pt-5">
        <div className="min-w-0">
          <p className="eyebrow text-muted">{categoryLabel}</p>
          <h3 className="text-h3 mt-2">{t(project.title)}</h3>
          <p className="mt-1.5 text-[0.9375rem] text-muted">{meta.join(' · ')}</p>
        </div>
        <ArrowUpRight
          className="mt-1 size-6 shrink-0 text-ink transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      {ongoing && (
        <div className="mt-4">
          <div
            role="progressbar"
            aria-valuenow={project.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={t(ui.project.progress)}
            className="h-1 overflow-hidden rounded-full bg-line"
          >
            <div className="h-full bg-ink" style={{ width: `${project.progress}%` }} />
          </div>
          <p className="mt-2 text-sm text-muted">
            {t(ui.project.progress)}: {localizeDigits(project.progress, lang)}%
          </p>
        </div>
      )}
    </Link>
  )
}
