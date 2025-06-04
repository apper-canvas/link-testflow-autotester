import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import FormField from '../molecules/FormField'
import Button from '../atoms/Button'
import Title from '../atoms/Title'
import AppIcon from '../atoms/AppIcon'
import ProgressBar from '../molecules/ProgressBar'
import { earlyAccessApplicationService } from '../../services'

const ApplicationForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    teamSize: '',
    currentTestingMethod: ''
  })
  const [errors, setErrors] = useState({})

  const teamSizeOptions = [
    '1-5 developers',
    '6-15 developers',
    '16-50 developers',
    '51-100 developers',
    '100+ developers'
  ]

  const testingMethodOptions = [
    'Manual testing only',
    'Some automation (Selenium, etc.)',
    'CI/CD with testing',
    'Advanced test frameworks',
    'No structured testing'
  ]

  const formSteps = [
    {
      title: "Personal Information",
      fields: ['fullName', 'email']
    },
    {
      title: "Company Details",
      fields: ['company', 'teamSize']
    },
    {
      title: "Testing Background",
      fields: ['currentTestingMethod']
    }
  ]

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : ''
      case 'company':
        return value.trim().length < 2 ? 'Company name is required' : ''
      case 'teamSize':
        return !value ? 'Please select your team size' : ''
      case 'currentTestingMethod':
        return !value ? 'Please select your current testing method' : ''
      default:
        return ''
    }
  }

  const validateCurrentStep = () => {
    const stepFields = formSteps[currentStep].fields
    const stepErrors = {}

    stepFields.forEach(field => {
      const error = validateField(field, formData[field])
      if (error) stepErrors[field] = error
    })

    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(prev => prev + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return

    setLoading(true)
    try {
      await earlyAccessApplicationService.create({
        ...formData,
        applicationDate: new Date().toISOString()
      })

      toast.success('Application submitted successfully! We will contact you soon.')

      setFormData({
        fullName: '',
        email: '',
        company: '',
        teamSize: '',
        currentTestingMethod: ''
      })
      setCurrentStep(0)
      setErrors({})
      onClose()

    } catch (error) {
      toast.error('Failed to submit application. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const currentStepData = formSteps[currentStep]
  const progress = ((currentStep + 1) / formSteps.length) * 100

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="p-6 border-b border-surface-200">
        <div className="flex items-center justify-between mb-4">
          <Title as="h3" className="text-2xl">
            Early Access Application
          </Title>
          <Button
            onClick={onClose}
            className="p-2 hover:bg-surface-100 rounded-xl"
            variant="text-only"
            aria-label="Close"
          >
            <AppIcon name="X" className="w-5 h-5 text-surface-600" />
          </Button>
        </div>
        <ProgressBar currentStep={currentStep} totalSteps={formSteps.length} progress={progress} />
      </div>

      {/* Form Content */}
      <div className="p-6">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Title as="h4" className="text-lg mb-6">
            {currentStepData.title}
          </Title>

          <div className="space-y-4">
            {currentStepData.fields.includes('fullName') && (
              <FormField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                error={errors.fullName}
                required
              />
            )}

            {currentStepData.fields.includes('email') && (
              <FormField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="your.email@company.com"
                error={errors.email}
                required
              />
            )}

            {currentStepData.fields.includes('company') && (
              <FormField
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
                error={errors.company}
                required
              />
            )}

            {currentStepData.fields.includes('teamSize') && (
              <FormField
                label="Team Size"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                type="select"
                options={teamSizeOptions}
                placeholder="Select team size"
                error={errors.teamSize}
                required
              />
            )}

            {currentStepData.fields.includes('currentTestingMethod') && (
              <FormField
                label="Current Testing Method"
                name="currentTestingMethod"
                value={formData.currentTestingMethod}
                onChange={handleInputChange}
                type="select"
                options={testingMethodOptions}
                placeholder="Select your current method"
                error={errors.currentTestingMethod}
                required
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-surface-200">
        <div className="flex gap-3">
          {currentStep > 0 && (
            <Button
              onClick={handlePrevious}
              className="flex-1 border border-surface-300 text-surface-700 hover:bg-surface-50"
              variant="text-only"
            >
              Previous
            </Button>
          )}

          <Button
            onClick={handleNext}
            loading={loading}
            className="flex-1"
            variant="primary"
          >
            {currentStep === formSteps.length - 1 ? 'Submit Application' : 'Next'}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default ApplicationForm