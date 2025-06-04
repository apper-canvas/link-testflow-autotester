import React from 'react'
import { motion } from 'framer-motion'

const Title = ({
  children,
  as = 'h2',
  className = '',
  variants,
  initial,
  animate,
  transition,
  viewport,
  ...props
}) => {
  const Component = motion[as] || motion.h2

  return (
    <Component
      className={`font-heading font-bold text-surface-800 ${className}`}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={viewport}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Title