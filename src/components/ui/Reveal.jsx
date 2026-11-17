import { motion, useReducedMotion } from 'framer-motion'

const EASE_SOFT = [0.22, 1, 0.36, 1]

/**
 * Fade-and-rise entrance, played once when the element scrolls into view.
 * Renders a plain element when the visitor prefers reduced motion.
 */
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: EASE_SOFT, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
