import React from 'react'
import { motion } from 'framer-motion'
import Text from '../atoms/Text'
import Title from '../atoms/Title'

const BenefitCard = ({ label, value, suffix, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-surface-200"
    >
      <div className="text-center">
        <Title as="h3" className={`text-5xl sm:text-6xl font-bold ${color} mb-2`}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {value}{suffix}
          </motion.span>
        </Title>
        <Text className="text-lg font-semibold text-surface-800">
          {label}
        </Text>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

export default BenefitCard