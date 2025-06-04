import React from 'react'
import Button from '../atoms/Button'
import AppIcon from '../atoms/AppIcon'

const SocialLinks = () => {
  const socialButtons = [
    { name: "Twitter", icon: "Twitter", link: "#" },
    { name: "Linkedin", icon: "Linkedin", link: "#" },
    { name: "Github", icon: "Github", link: "#" },
  ]

  return (
    <div className="flex space-x-4">
      {socialButtons.map((button, index) => (
        <Button
          key={index}
          onClick={() => window.open(button.link, '_blank')}
          className="p-2 bg-surface-700 rounded-lg hover:bg-surface-600 transition-colors"
          aria-label={button.name}
          variant="text-only" // Use text-only variant as it's a simple icon button
        >
          <AppIcon name={button.icon} className="w-5 h-5 text-white" />
        </Button>
      ))}
    </div>
  )
}

export default SocialLinks