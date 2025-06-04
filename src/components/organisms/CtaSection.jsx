import React from 'react'
import { motion } from 'framer-motion'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

const CtaSection = ({ onOpenModal }) => {
  return (
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
          <Title as="h2" className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
            Take the Next Step
          </Title>
          <Text className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            Limited spots are available for early access. Don't let manual testing hold you back—act today!
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={onOpenModal}
              variant="cta-primary"
              size="lg"
              icon="ArrowRight"
            >
              Apply for Early Access
            </Button>

            <Button
              onClick={() => console.log('Book a Demo')} // Replace with actual demo booking logic
              variant="cta-glass"
              size="lg"
              icon="Calendar"
              iconPosition="left"
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection