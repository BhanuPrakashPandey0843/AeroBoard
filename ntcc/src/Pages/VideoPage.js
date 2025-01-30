import React from 'react'
import FullHeroVideo from '../Components/FullHeroVideo/FullHeroVideo'
import Footer from '../Components/Footer/Footer'
import PromoSection from '../Components/PromoSection/PromoSection'
import Navbar from '../Components/Navbar/Navbar'
const VideoPage = () => {
  return (
    <div>
        <Navbar/>
      <FullHeroVideo />
      <PromoSection /> 
      <Footer/>
    </div>
  )
}

export default VideoPage
