import { cn } from '@/utils/cn'
import { getInitials } from '@/utils/format'
import Img from './Img'

/**
 * A person's photo, or their initials when no photo is available.
 * `initialsFrom` should be the Latin-script name so initials read well.
 */
export default function Avatar({ photo, alt, initialsFrom, className }) {
  if (photo) {
    return <Img src={photo} alt={alt} className={className} />
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex items-center justify-center bg-sand font-display text-3xl font-bold tracking-wide text-ink/35',
        className,
      )}
    >
      {getInitials(initialsFrom)}
    </div>
  )
}
