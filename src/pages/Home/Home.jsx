import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import BreakingBarriersSection from '../../components/BreakingBarriersSection/BreakingBarriersSection'
import TreatmentPlatformSection from '../../components/TreatmentPlatformSection/TreatmentPlatformSection'
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection'
import SuboxoneTreatment from '../../components/SuboxoneTreatment/SuboxoneTreatment'
import FeaturedOn from '../../components/Featured/Featured'
import CurrentlyServe from '../../components/CurrentlyServe/CurrentlyServe'
import GetAppSection from '../../components/GetAppSection/GetAppSection'

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BreakingBarriersSection/>
      <TreatmentPlatformSection />
      <TestimonialsSection />
      <SuboxoneTreatment/>
      <FeaturedOn/>
      <CurrentlyServe/>
      <GetAppSection/>
    </React.Fragment>

 
  )
}

export default Home
