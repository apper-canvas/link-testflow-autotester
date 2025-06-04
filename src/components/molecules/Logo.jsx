import React from 'react'
import AppIcon from '../atoms/AppIcon'
import Text from '../atoms/Text'

const Logo = ({ className = '', textClassName = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
        <AppIcon name="Zap" className="w-6 h-6 text-white" />
      </div>
      <Text as="span" className={`text-2xl font-heading font-bold text-surface-800 ${textClassName}`}>AutoTester</Text>
    </div>
  )
}

export default Logo