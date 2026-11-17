import { cn } from '@/utils/cn'
import Reveal from './Reveal'

/**
 * Eyebrow + title + optional intro. Left-aligned so it follows the natural
 * reading pattern. `tone="dark"` is for ink backgrounds.
 */
export default function SectionHeading({ eyebrow, title, intro, tone = 'light', id, className }) {
  const dark = tone === 'dark'

  return (
    <Reveal className={cn('max-w-2xl', className)}>
      {eyebrow && <p className={cn('eyebrow', dark ? 'text-white/65' : 'text-muted')}>{eyebrow}</p>}
      <h2 id={id} className={cn('text-h2 mt-3', dark && 'text-white')}>
        {title}
      </h2>
      {intro && <p className={cn('text-lead mt-4', dark ? 'text-white/75' : 'text-body')}>{intro}</p>}
    </Reveal>
  )
}
