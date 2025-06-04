import React from 'react'
import { motion } from 'framer-motion'
import AppIcon from '../atoms/AppIcon'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-gradient-to-br from-surface-50 to-white p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-surface-200"
    >
      <div className="flex items-start gap-4">
        <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <AppIcon name={icon} className="w-8 h-8 text-primary group-hover:text-white" />
        </div>
        <div>
          <Title as="h3" className="text-xl mb-3">
            {title}
          </Title>
          <Text className="text-surface-600">
            {description}
          </Text>
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureCard