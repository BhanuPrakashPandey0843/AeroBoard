import React from 'react'
import Footer from '../Components/Footer/Footer'
import ContactUs from '../Components/ContactUs/ContactUs'
import PromoSection from '../Components/PromoSection/PromoSection'
import Navbar from '../Components/Navbar/Navbar'
const ContactPage = () => {
  return (
    <div>
      <Navbar/>
      <ContactUs />  
      <PromoSection /> 
      <Footer/>
    </div>
  )
}

export default ContactPage
