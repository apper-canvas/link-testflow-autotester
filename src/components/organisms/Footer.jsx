import React from 'react'
import Logo from '../molecules/Logo'
import Text from '../atoms/Text'
import SocialLinks from '../molecules/SocialLinks'

const Footer = () => {
  return (
    <footer className="bg-surface-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo textClassName="text-white" />
            <Text className="text-surface-300 my-6 max-w-md">
              Revolutionize your software testing with AI-powered automation that's accessible to everyone.
            </Text>
            <SocialLinks />
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
          <Text className="text-surface-300 text-sm">
            © 2024 AutoTester. All rights reserved.
          </Text>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-surface-300 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-surface-300 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer