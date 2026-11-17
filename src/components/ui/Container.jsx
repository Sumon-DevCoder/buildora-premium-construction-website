import { cn } from '@/utils/cn'

/** Page-width wrapper: 1280px max, 16px gutters on mobile, 32px from tablet up. */
export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-4 md:px-8', className)} {...rest}>
      {children}
    </Tag>
  )
}
