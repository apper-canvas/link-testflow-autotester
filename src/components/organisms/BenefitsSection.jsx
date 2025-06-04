import React from 'react'
import { motion } from 'framer-motion'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import BenefitCard from '../molecules/BenefitCard'

const BenefitsSection = ({ benefits }) => {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-surface-50 to-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title as="h2" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Key Benefits
          </Title>
          <Text className="text-lg sm:text-xl text-surface-600 max-w-3xl mx-auto">
            See the dramatic impact AutoTester has on your development workflow
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection