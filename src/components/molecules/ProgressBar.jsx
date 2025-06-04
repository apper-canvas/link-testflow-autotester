import React from 'react'
import { motion } from 'framer-motion'
import Text from '../atoms/Text'

const ProgressBar = ({ currentStep, totalSteps, progress }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-surface-600">
        <Text as="span">Step {currentStep + 1} of {totalSteps}</Text>
        <Text as="span">{Math.round(progress)}% Complete</Text>
      </div>
      <div className="w-full bg-surface-200 rounded-full h-2">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}

export default ProgressBar