import React, { useState, useEffect } from 'react'
import NavBar from '../organisms/NavBar'
import HeroSection from '../organisms/HeroSection'
import HowItWorksSection from '../organisms/HowItWorksSection'
import BenefitsSection from '../organisms/BenefitsSection'
import FeaturesSection from '../organisms/FeaturesSection'
import EarlyAccessSection from '../organisms/EarlyAccessSection'
import CtaSection from '../organisms/CtaSection'
import Footer from '../organisms/Footer'
import SkipNav from '../molecules/SkipNav'

const HomePageTemplate = ({ data }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SkipNav />
      <NavBar scrollY={scrollY} />
      <HeroSection scrollY={scrollY} />
      <HowItWorksSection steps={data.steps} />
      <BenefitsSection benefits={data.benefits} />
      <FeaturesSection features={data.features} />
      <EarlyAccessSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default HomePageTemplate