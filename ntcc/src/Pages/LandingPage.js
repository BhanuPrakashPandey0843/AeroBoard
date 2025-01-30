import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AIComponent from '../Components/AIComponent/AIComponent'
import ZeaMedComponent from '../Components/ZeaMedComponent/ZeaMedComponent'
import HealthProfessionals from '../Components/HealthProfessionals/HealthProfessionals'
import ZeaMedFeatures from '../Components/ZeaMedFeatures/ZeaMedFeatures'
import CarrerHero from '../Components/CarrerHero/CarrerHero'
import HowItWorks from '../Components/HowItWorks/HowItWorks'
import FAQSection from '../Components/FAQSection/FAQSection'
import PromoSection from '../Components/PromoSection/PromoSection'
import Footer from '../Components/Footer/Footer'



const LandingPage = () => { 
  return (
    <div>
      <Navbar />
      <AIComponent />
      <ZeaMedComponent />
      <HealthProfessionals />
      <ZeaMedFeatures />
      <HowItWorks />
      <CarrerHero />
      <FAQSection/>
      <PromoSection />
      <Footer/>
      
    </div>
  )
}

export default LandingPage

      
     
  