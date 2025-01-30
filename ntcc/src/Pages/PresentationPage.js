import React from 'react'
import FullWidthCarousel from '../Components/FullWidthCarousel/FullWidthCarousel'
import Footer from '../Components/Footer/Footer'
import PromoSection from '../Components/PromoSection/PromoSection'
import Navbar from '../Components/Navbar/Navbar'
const PresentationPage = () => {
  return (
    <div>
      <Navbar/>
      <FullWidthCarousel />
      <PromoSection /> 
      <Footer/>
    </div>
  )
}

export default PresentationPage
