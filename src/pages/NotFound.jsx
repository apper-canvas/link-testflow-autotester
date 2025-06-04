import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '../components/ApperIcon'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-surface-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-3xl mx-auto mb-6 flex items-center justify-center"
          >
            <ApperIcon name="AlertTriangle" className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-6xl font-heading font-bold text-surface-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-surface-700 mb-4">Page Not Found</h2>
          <p className="text-surface-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105"
        >
          <ApperIcon name="Home" className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound