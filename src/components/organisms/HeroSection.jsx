import React from 'react'
import { motion } from 'framer-motion'
import AppIcon from '../atoms/AppIcon'
import Button from '../atoms/Button'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

const HeroSection = ({ scrollY }) => {
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

  return (
<section id="main-content" className="relative min-h-screen flex items-center justify-center hero-bg neural-pattern overflow-hidden">
      {/* AI-themed Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-ai-blue/20 rounded-full blur-xl ai-glow"
          style={{ y: scrollY * 0.5 }}
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-ai-neural/30 rounded-full blur-xl"
          style={{ y: scrollY * 0.3 }}
          animate={{ 
            scale: [1.2, 0.8, 1.2], 
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-ai-purple/15 rounded-full blur-xl ai-glow"
          style={{ y: scrollY * 0.7 }}
          animate={{ 
            scale: [1, 1.4, 1], 
            rotate: [0, -180, -360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-28 h-28 bg-secondary/20 rounded-full blur-xl"
          style={{ y: scrollY * 0.4 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8], 
            rotate: [45, 225, 405],
            x: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      {/* AI Gradient Overlay */}
      <div className="absolute inset-0 ai-gradient-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <Title
            as="h1"
            variants={staggerChild}
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
          >
            Revolutionize Your{' '}
            <span className="text-gradient">Software Testing</span>
          </Title>

          <Text
            variants={staggerChild}
            className="text-lg sm:text-xl lg:text-2xl text-surface-600 max-w-4xl mx-auto leading-relaxed"
          >
            AI-powered, no-code test automation that slashes testing time by 80% and saves 90% on costs.
            Transform testing into an efficient, accessible task for any team member.
          </Text>

          <motion.div
            variants={staggerChild}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button variant="primary" size="lg" icon="ArrowRight">
              Get Early Access
            </Button>

            <Button variant="glass" size="lg" icon="Play" iconPosition="left">
              Book Demo
            </Button>
          </motion.div>

          <motion.div
            variants={staggerChild}
            className="flex flex-wrap justify-center gap-6 pt-12 text-sm text-surface-500"
          >
            <div className="flex items-center gap-2">
              <AppIcon name="CheckCircle" className="w-4 h-4 text-secondary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <AppIcon name="CheckCircle" className="w-4 h-4 text-secondary" />
              Free 14-day trial
            </div>
            <div className="flex items-center gap-2">
              <AppIcon name="CheckCircle" className="w-4 h-4 text-secondary" />
              Setup in 5 minutes
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection