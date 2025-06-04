import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MainFeature from '../components/MainFeature'
import ApperIcon from '../components/ApperIcon'

const Home = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const steps = [
    {
      icon: "Play",
      title: "Record Feature Flows",
      description: "Capture the basic steps of your feature in minutes with our intuitive recorder.",
      details: "Simply click record and interact with your application. Our AI captures every action, click, and input automatically."
    },
    {
      icon: "Zap",
      title: "Generate Test Cases with AI",
      description: "AutoTester's AI creates thorough test cases, covering edge and negative scenarios.",
      details: "Our advanced AI analyzes your recorded flows and generates comprehensive test scenarios you might never have thought of."
    },
    {
      icon: "Code",
      title: "Generate Steps with AI",
      description: "AI produces precise test steps with locators, even for unrecorded elements.",
      details: "Get detailed test steps with robust selectors that adapt to your application's changes automatically."
    },
    {
      icon: "CheckCircle",
      title: "Run Tests & Find Bugs",
      description: "Execute tests and pinpoint issues fast with detailed reporting.",
      details: "Run your tests across multiple environments and get instant feedback on bugs and performance issues."
    }
  ]

  const benefits = [
    { label: "Time Saved", value: 80, suffix: "%", color: "text-primary" },
    { label: "Cost Reduction", value: 90, suffix: "%", color: "text-secondary" },
    { label: "Faster Delivery", value: 80, suffix: "%", color: "text-accent" },
    { label: "Defect Reduction", value: 63, suffix: "%", color: "text-primary" }
  ]

  const features = [
    {
      icon: "RefreshCw",
      title: "Self-Healing Tests",
      description: "Auto-adapt to UI changes, cutting maintenance time significantly."
    },
    {
      icon: "Target",
      title: "Comprehensive Coverage",
      description: "Achieve 90-100% test coverage with AI-generated scenarios."
    },
    {
      icon: "Layers",
      title: "No-Code Automation",
      description: "Build tests without writing a single line of code."
    },
    {
      icon: "Users",
      title: "Team Collaboration",
      description: "Perfect for both technical and non-technical team members."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-surface-100 overflow-x-hidden">
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrollY > 100 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrollY > 100 ? 'blur(12px)' : 'none',
          borderBottom: scrollY > 100 ? '1px solid rgba(226, 232, 240, 0.3)' : 'none'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <ApperIcon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-surface-800">AutoTester</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-surface-600 hover:text-primary transition-colors">How It Works</a>
              <a href="#benefits" className="text-surface-600 hover:text-primary transition-colors">Benefits</a>
              <a href="#features" className="text-surface-600 hover:text-primary transition-colors">Features</a>
              <button className="glass-primary px-6 py-2 rounded-xl text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300">
                Book Demo
              </button>
            </div>

            <button className="md:hidden p-2">
              <ApperIcon name="Menu" className="w-6 h-6 text-surface-600" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="main-content" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
            style={{ y: scrollY * 0.5 }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
            style={{ y: scrollY * 0.3 }}
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-xl"
            style={{ y: scrollY * 0.7 }}
            animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={staggerChild}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-surface-800 leading-tight"
            >
              Revolutionize Your{' '}
              <span className="text-gradient">Software Testing</span>
            </motion.h1>

            <motion.p
              variants={staggerChild}
              className="text-lg sm:text-xl lg:text-2xl text-surface-600 max-w-4xl mx-auto leading-relaxed"
            >
              AI-powered, no-code test automation that slashes testing time by 80% and saves 90% on costs. 
              Transform testing into an efficient, accessible task for any team member.
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <button className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg shadow-glow hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Early Access
                  <ApperIcon name="ArrowRight" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group glass-effect px-8 py-4 rounded-2xl font-semibold text-lg text-surface-700 hover:bg-white/20 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <ApperIcon name="Play" className="w-5 h-5" />
                  Book Demo
                </span>
              </button>
            </motion.div>

            <motion.div
              variants={staggerChild}
              className="flex flex-wrap justify-center gap-6 pt-12 text-sm text-surface-500"
            >
              <div className="flex items-center gap-2">
                <ApperIcon name="CheckCircle" className="w-4 h-4 text-secondary" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <ApperIcon name="CheckCircle" className="w-4 h-4 text-secondary" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <ApperIcon name="CheckCircle" className="w-4 h-4 text-secondary" />
                Setup in 5 minutes
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-surface-800 mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-surface-600 max-w-3xl mx-auto">
              Transform your testing workflow with our simple 4-step process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps List */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 shadow-soft' 
                      : 'hover:bg-surface-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-primary text-white shadow-glow' 
                        : 'bg-surface-100 text-surface-600 group-hover:bg-primary group-hover:text-white'
                    }`}>
                      <ApperIcon name={step.icon} className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-surface-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-surface-600 mb-2">
                        {step.description}
                      </p>
                      <AnimatePresence>
                        {activeStep === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-surface-500 pt-2 border-t border-surface-200"
                          >
                            {step.details}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className={`text-3xl font-bold transition-colors duration-300 ${
                      activeStep === index ? 'text-primary' : 'text-surface-300'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
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
                    <ApperIcon name={steps[activeStep]?.icon} className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-surface-800">
                      {steps[activeStep]?.title}
                    </h4>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-surface-500">Step {activeStep + 1} of 4</span>
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

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-to-br from-surface-50 to-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-surface-800 mb-6">
              Key Benefits
            </h2>
            <p className="text-lg sm:text-xl text-surface-600 max-w-3xl mx-auto">
              See the dramatic impact AutoTester has on your development workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-surface-200"
              >
                <div className="text-center">
                  <div className={`text-5xl sm:text-6xl font-bold ${benefit.color} mb-2`}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {benefit.value}{benefit.suffix}
                    </motion.span>
                  </div>
                  <h3 className="text-lg font-semibold text-surface-800">
                    {benefit.label}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-surface-800 mb-6">
              Unique Features
            </h2>
            <p className="text-lg sm:text-xl text-surface-600 max-w-3xl mx-auto">
              Discover what makes AutoTester the most advanced testing solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-surface-50 to-white p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-surface-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ApperIcon name={feature.icon} className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-surface-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-surface-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Feature Component */}
      <MainFeature />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Take the Next Step
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
              Limited spots are available for early access. Don't let manual testing hold you back—act today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="group bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-lg shadow-glow hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Apply for Early Access
                  <ApperIcon name="ArrowRight" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group glass-effect px-8 py-4 rounded-2xl font-semibold text-lg text-white hover:bg-white/20 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <ApperIcon name="Calendar" className="w-5 h-5" />
                  Book a Demo
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <ApperIcon name="Zap" className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-heading font-bold">AutoTester</span>
              </div>
              <p className="text-surface-300 mb-6 max-w-md">
                Revolutionize your software testing with AI-powered automation that's accessible to everyone.
              </p>
              <div className="flex space-x-4">
                <button className="p-2 bg-surface-700 rounded-lg hover:bg-surface-600 transition-colors">
                  <ApperIcon name="Twitter" className="w-5 h-5" />
                </button>
                <button className="p-2 bg-surface-700 rounded-lg hover:bg-surface-600 transition-colors">
                  <ApperIcon name="Linkedin" className="w-5 h-5" />
                </button>
                <button className="p-2 bg-surface-700 rounded-lg hover:bg-surface-600 transition-colors">
                  <ApperIcon name="Github" className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-surface-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-surface-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-surface-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-surface-300 text-sm">
              © 2024 AutoTester. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-surface-300 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-surface-300 text-sm hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home