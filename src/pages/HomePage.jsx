import React from 'react'
import HomePageTemplate from '../components/templates/HomePageTemplate'

const HomePage = () => {
  const steps = [
    {
      icon: "Play",
      title: "Record Feature Flows",
      description: "Capture the basic steps of your feature in minutes with our intuitive recorder.",
      details: "Simply click record and interact with your application. Our AI captures every action, click, and input automatically."
    },
    {
      icon: "Zap",
      title: "Generate Test Cases with AI",
      description: "AutoTester's AI creates thorough test cases, covering edge and negative scenarios.",
      details: "Our advanced AI analyzes your recorded flows and generates comprehensive test scenarios you might never have thought of."
    },
    {
      icon: "Code",
      title: "Generate Steps with AI",
      description: "AI produces precise test steps with locators, even for unrecorded elements.",
      details: "Get detailed test steps with robust selectors that adapt to your application's changes automatically."
    },
    {
      icon: "CheckCircle",
      title: "Run Tests & Find Bugs",
      description: "Execute tests and pinpoint issues fast with detailed reporting.",
      details: "Run your tests across multiple environments and get instant feedback on bugs and performance issues."
    }
  ]

  const benefits = [
    { label: "Time Saved", value: 80, suffix: "%", color: "text-primary" },
    { label: "Cost Reduction", value: 90, suffix: "%", color: "text-secondary" },
    { label: "Faster Delivery", value: 80, suffix: "%", color: "text-accent" },
    { label: "Defect Reduction", value: 63, suffix: "%", color: "text-primary" }
  ]

  const features = [
    {
      icon: "RefreshCw",
      title: "Self-Healing Tests",
      description: "Auto-adapt to UI changes, cutting maintenance time significantly."
    },
    {
      icon: "Target",
      title: "Comprehensive Coverage",
      description: "Achieve 90-100% test coverage with AI-generated scenarios."
    },
    {
      icon: "Layers",
      title: "No-Code Automation",
      description: "Build tests without writing a single line of code."
    },
    {
      icon: "Users",
      title: "Team Collaboration",
      description: "Perfect for both technical and non-technical team members."
    }
  ]

  const pageData = {
    steps,
    benefits,
    features,
  }

  return <HomePageTemplate data={pageData} />
}

export default HomePage