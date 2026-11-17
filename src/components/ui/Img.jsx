import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { cn } from '@/utils/cn'

/**
 * Image inside a sized box. The parent sets the size (usually an aspect
 * ratio class), so the layout never shifts while the photo loads, and a
 * neutral placeholder is shown if the file is missing.
 */
export default function Img({ src, alt, className, imgClassName, priority = false }) {
  const [failed, setFailed] = useState(false)
  const { t } = useLanguage()
  const showImage = Boolean(src) && !failed

  return (
    <div className={cn('relative overflow-hidden bg-graphite', className)}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className={cn('absolute inset-0 h-full w-full object-cover', imgClassName)}
        />
      ) : (
        <div className="bg-blueprint absolute inset-0 flex items-end p-4">
          <span className="text-sm text-white/60">{t(ui.common.imageUnavailable)}</span>
        </div>
      )}
    </div>
  )
}
