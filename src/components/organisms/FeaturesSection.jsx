import React from 'react'
import { motion } from 'framer-motion'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import FeatureCard from '../molecules/FeatureCard'

const FeaturesSection = ({ features }) => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title as="h2" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Unique Features
          </Title>
          <Text className="text-lg sm:text-xl text-surface-600 max-w-3xl mx-auto">
            Discover what makes AutoTester the most advanced testing solution
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection