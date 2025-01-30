import React from 'react'
import Footer from '../Components/Footer/Footer'
import CarrerHero from '../Components/CarrerHero/CarrerHero'
import PromoSection from '../Components/PromoSection/PromoSection'
import ProductDescription from '../Components/ProductDescription/ProductDescription'
import Navbar from '../Components/Navbar/Navbar'
const ContactPage = () => {
  return (
    <div>
      <Navbar/>
      <CarrerHero />
      <ProductDescription/>
      <PromoSection /> 
      <Footer/>
    </div>
  )
}

export default ContactPage
