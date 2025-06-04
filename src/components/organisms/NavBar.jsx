import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../molecules/Logo'
import Button from '../atoms/Button'
import AppIcon from '../atoms/AppIcon'

const NavBar = ({ scrollY }) => {
  return (
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
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-surface-600 hover:text-primary transition-colors">How It Works</a>
            <a href="#benefits" className="text-surface-600 hover:text-primary transition-colors">Benefits</a>
            <a href="#features" className="text-surface-600 hover:text-primary transition-colors">Features</a>
            <Button variant="secondary" size="md">
              Book Demo
            </Button>
          </div>

          <Button className="md:hidden p-2" variant="text-only" aria-label="Menu">
            <AppIcon name="Menu" className="w-6 h-6 text-surface-600" />
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar