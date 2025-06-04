import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import StepItem from '../molecules/StepItem'
import AppIcon from '../atoms/AppIcon'

const HowItWorksSection = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title as="h2" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            How It Works
          </Title>
          <Text className="text-lg sm:text-xl text-surface-600 max-w-3xl mx-auto">
            Transform your testing workflow with our simple 4-step process
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                step={step}
                index={index}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-surface-50 to-white p-8 rounded-3xl shadow-soft border border-surface-200"
            >
              <div className="aspect-video bg-surface-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <AppIcon name={steps[activeStep]?.icon} className="w-16 h-16 text-primary mx-auto mb-4" />
                  <Title as="h4" className="text-lg">
                    {steps[activeStep]?.title}
                  </Title>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Text as="span" className="text-sm text-surface-500">Step {activeStep + 1} of {steps.length}</Text>
                <div className="flex gap-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === activeStep ? 'bg-primary' : 'bg-surface-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection