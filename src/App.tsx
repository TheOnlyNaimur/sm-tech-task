import { useCallback, useState } from 'react'
import './App.css'

import SplashScreen from './components/SplashScreen'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ApproachSection from './components/ApproachSection'
import MarqueeStrip from './components/MarqueeStrip'
import CompanyExperties from './components/CompanyExperties'
import FunFactsSection from './components/FunFactsSection'
import HappyUsers from './components/HappyUsers'
import PortfolioGrid from './components/PortfolioGrid'
import UserFeedbacks from './components/UserFeedbacks'
import ContactSection from './components/ContactSection'
import AwardsSection from './components/AwardsSection'
import Footer from './components/Footer'
import BottomBar from './components/BottomBar'

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <div className="px-3">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <ApproachSection />
      <MarqueeStrip text="See how our team combines creativity, technology, and strategy" />
      <PortfolioGrid />
      <CompanyExperties />
      <FunFactsSection />
      <HappyUsers />
      <UserFeedbacks />
      <ContactSection />
      <AwardsSection />
      <Footer />
      <BottomBar />
    </div>
  )
}
