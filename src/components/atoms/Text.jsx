import React from 'react'
import { motion } from 'framer-motion'

const Text = ({
  children,
  as = 'p',
  className = '',
  variants,
  initial,
  animate,
  transition,
  viewport,
  ...props
}) => {
  const Component = motion[as] || motion.p

  return (
    <Component
      className={className}
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

export default Text