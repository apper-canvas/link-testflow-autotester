import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../atoms/Button'
import AppIcon from '../atoms/AppIcon'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import InfoCard from '../molecules/InfoCard'
import ApplicationForm from './ApplicationForm'

const EarlyAccessSection = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <>
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
                <Title as="h2" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
                  Join the Testing Revolution
                </Title>
                <Text className="text-lg sm:text-xl text-surface-600 mb-8">
                  Get exclusive early access to AutoTester and transform your development workflow.
                  Limited spots available for forward-thinking teams.
                </Text>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <AppIcon name="Check" className="w-5 h-5 text-white" />
                  </div>
                  <Text as="span" className="text-surface-700">Priority access to new features</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <AppIcon name="Check" className="w-5 h-5 text-white" />
                  </div>
                  <Text as="span" className="text-surface-700">Dedicated support and onboarding</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <AppIcon name="Check" className="w-5 h-5 text-white" />
                  </div>
                  <Text as="span" className="text-surface-700">Special launch pricing (50% off)</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <AppIcon name="Check" className="w-5 h-5 text-white" />
                  </div>
                  <Text as="span" className="text-surface-700">Direct feedback channel to our team</Text>
                </div>
              </div>

              <Button
                onClick={openModal}
                variant="primary"
                size="lg"
                icon="ArrowRight"
              >
                Apply for Early Access
              </Button>
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
                    <Title as="h3" className="text-xl">Application Status</Title>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>
                      <div className="w-3 h-3 bg-accent rounded-full animate-bounce-slow"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <InfoCard
                      icon="Users"
                      label="Spots Remaining"
                      value="47"
                      valueColor="text-primary"
                    />
                    <InfoCard
                      icon="Clock"
                      label="Avg. Response Time"
                      value="24h"
                      valueColor="text-secondary"
                    />
                    <InfoCard
                      icon="Star"
                      label="Early Access Rating"
                      value="4.9/5"
                      valueColor="text-accent"
                    />
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
            <ApplicationForm onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EarlyAccessSection