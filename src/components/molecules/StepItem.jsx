import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AppIcon from '../atoms/AppIcon'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

const StepItem = ({ step, index, activeStep, setActiveStep }) => {
  const isActive = activeStep === index

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-primary/10 to-secondary/10 shadow-soft'
          : 'hover:bg-surface-50'
      }`}
      onClick={() => setActiveStep(index)}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl transition-all duration-300 ${
          isActive
            ? 'bg-primary text-white shadow-glow'
            : 'bg-surface-100 text-surface-600 group-hover:bg-primary group-hover:text-white'
        }`}>
          <AppIcon name={step.icon} className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <Title as="h3" className="text-xl mb-2">
            {step.title}
          </Title>
          <Text className="text-surface-600 mb-2">
            {step.description}
          </Text>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Text className="text-sm text-surface-500 pt-2 border-t border-surface-200">
                  {step.details}
                </Text>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`text-3xl font-bold transition-colors duration-300 ${
          isActive ? 'text-primary' : 'text-surface-300'
        }`}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  )
}

export default StepItem