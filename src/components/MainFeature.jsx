import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'
import { earlyAccessApplicationService } from '../services'

const MainFeature = () => {
  const [showModal, setShowModal] = useState(false)
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
    
    // Clear error when user starts typing
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
      
      // Reset form and close modal
      setFormData({
        fullName: '',
        email: '',
        company: '',
        teamSize: '',
        currentTestingMethod: ''
      })
      setCurrentStep(0)
      setErrors({})
      setShowModal(false)
      
    } catch (error) {
      toast.error('Failed to submit application. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const openModal = () => {
    setShowModal(true)
    setCurrentStep(0)
    setErrors({})
  }

  const closeModal = () => {
    setShowModal(false)
    setCurrentStep(0)
    setErrors({})
  }

  const currentStepData = formSteps[currentStep]
  const progress = ((currentStep + 1) / formSteps.length) * 100

  return (
    <>
      {/* Early Access Application Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-surface-800 mb-6">
                  Join the Testing Revolution
                </h2>
                <p className="text-lg sm:text-xl text-surface-600 mb-8">
                  Get exclusive early access to AutoTester and transform your development workflow. 
                  Limited spots available for forward-thinking teams.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <ApperIcon name="Check" className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-surface-700">Priority access to new features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <ApperIcon name="Check" className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-surface-700">Dedicated support and onboarding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <ApperIcon name="Check" className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-surface-700">Special launch pricing (50% off)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <ApperIcon name="Check" className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-surface-700">Direct feedback channel to our team</span>
                </div>
              </div>

              <button
                onClick={openModal}
                className="group bg-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-glow hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Apply for Early Access
                <ApperIcon name="ArrowRight" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-3xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-surface-800">Application Status</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>
                      <div className="w-3 h-3 bg-accent rounded-full animate-bounce-slow"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/50 p-4 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <ApperIcon name="Users" className="w-5 h-5 text-primary" />
                        <span className="font-medium text-surface-800">Spots Remaining</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">47</div>
                    </div>
                    
                    <div className="bg-white/50 p-4 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <ApperIcon name="Clock" className="w-5 h-5 text-secondary" />
                        <span className="font-medium text-surface-800">Avg. Response Time</span>
                      </div>
                      <div className="text-2xl font-bold text-secondary">24h</div>
                    </div>
                    
                    <div className="bg-white/50 p-4 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <ApperIcon name="Star" className="w-5 h-5 text-accent" />
                        <span className="font-medium text-surface-800">Early Access Rating</span>
                      </div>
                      <div className="text-2xl font-bold text-accent">4.9/5</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
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
                  <h3 className="text-2xl font-heading font-bold text-surface-800">
                    Early Access Application
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-surface-100 rounded-xl transition-colors"
                  >
                    <ApperIcon name="X" className="w-5 h-5 text-surface-600" />
                  </button>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-surface-600">
                    <span>Step {currentStep + 1} of {formSteps.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
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
                  <h4 className="text-lg font-semibold text-surface-800 mb-6">
                    {currentStepData.title}
                  </h4>

                  <div className="space-y-4">
                    {currentStepData.fields.includes('fullName') && (
                      <div>
                        <label className="block text-sm font-medium text-surface-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.fullName ? 'border-red-500' : 'border-surface-300'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                        )}
                      </div>
                    )}

                    {currentStepData.fields.includes('email') && (
                      <div>
                        <label className="block text-sm font-medium text-surface-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.email ? 'border-red-500' : 'border-surface-300'
                          }`}
                          placeholder="your.email@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    )}

                    {currentStepData.fields.includes('company') && (
                      <div>
                        <label className="block text-sm font-medium text-surface-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.company ? 'border-red-500' : 'border-surface-300'
                          }`}
                          placeholder="Your company name"
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                        )}
                      </div>
                    )}

                    {currentStepData.fields.includes('teamSize') && (
                      <div>
                        <label className="block text-sm font-medium text-surface-700 mb-2">
                          Team Size *
                        </label>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.teamSize ? 'border-red-500' : 'border-surface-300'
                          }`}
                        >
                          <option value="">Select team size</option>
                          {teamSizeOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.teamSize && (
                          <p className="text-red-500 text-sm mt-1">{errors.teamSize}</p>
                        )}
                      </div>
                    )}

                    {currentStepData.fields.includes('currentTestingMethod') && (
                      <div>
                        <label className="block text-sm font-medium text-surface-700 mb-2">
                          Current Testing Method *
                        </label>
                        <select
                          name="currentTestingMethod"
                          value={formData.currentTestingMethod}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.currentTestingMethod ? 'border-red-500' : 'border-surface-300'
                          }`}
                        >
                          <option value="">Select your current method</option>
                          {testingMethodOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.currentTestingMethod && (
                          <p className="text-red-500 text-sm mt-1">{errors.currentTestingMethod}</p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-surface-200">
                <div className="flex gap-3">
                  {currentStep > 0 && (
                    <button
                      onClick={handlePrevious}
                      className="flex-1 px-4 py-3 border border-surface-300 text-surface-700 rounded-xl font-medium hover:bg-surface-50 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  
                  <button
                    onClick={handleNext}
                    disabled={loading}
                    className="flex-1 bg-primary text-white px-4 py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <ApperIcon name="Loader2" className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : currentStep === formSteps.length - 1 ? (
                      'Submit Application'
                    ) : (
                      'Next'
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MainFeature