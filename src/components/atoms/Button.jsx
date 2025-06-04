import React from 'react'
import { motion } from 'framer-motion'
import AppIcon from './AppIcon'

const Button = ({
  children,
  onClick,
  className = '',
  variant = 'primary', // 'primary', 'secondary', 'glass', 'text-only'
  size = 'md', // 'sm', 'md', 'lg'
  icon,
  iconPosition = 'right', // 'left', 'right'
  disabled = false,
  loading = false,
  ...props
}) => {
  const baseClasses = "group relative font-semibold transition-all duration-300 flex items-center justify-center gap-2"
  let variantClasses = ''
  let sizeClasses = ''
  let loadingIcon = null

  switch (variant) {
    case 'primary':
      variantClasses = "bg-primary text-white shadow-glow hover:shadow-2xl hover:scale-105 overflow-hidden"
      break
    case 'secondary':
      variantClasses = "glass-primary text-primary hover:bg-primary hover:text-white"
      break
    case 'glass':
      variantClasses = "glass-effect text-surface-700 hover:bg-white/20"
      break
    case 'cta-primary': // Specific for CTA section
      variantClasses = "bg-white text-primary shadow-glow hover:shadow-2xl hover:scale-105"
      break
    case 'cta-glass': // Specific for CTA section
      variantClasses = "glass-effect text-white hover:bg-white/20"
      break
    default:
      variantClasses = "bg-primary text-white"
  }

  switch (size) {
    case 'sm':
      sizeClasses = "px-4 py-2 rounded-lg text-sm"
      break
    case 'md':
      sizeClasses = "px-6 py-3 rounded-xl text-md"
      break
    case 'lg':
      sizeClasses = "px-8 py-4 rounded-2xl text-lg"
      break
    default:
      sizeClasses = "px-6 py-3 rounded-xl text-md"
  }

  if (loading) {
    loadingIcon = <AppIcon name="Loader2" className="w-4 h-4 animate-spin" />
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled || loading}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            {loadingIcon}
            {children}
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && <AppIcon name={icon} className="w-5 h-5" />}
            {children}
            {icon && iconPosition === 'right' && <AppIcon name={icon} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </>
        )}
      </span>
    </motion.button>
  )
}

export default Button