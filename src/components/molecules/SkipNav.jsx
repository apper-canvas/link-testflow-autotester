import React from 'react'

const SkipNav = ({ targetId = "main-content" }) => {
  return (
    <a href={`#${targetId}`} className="skip-nav">
      Skip to main content
    </a>
  )
}

export default SkipNav