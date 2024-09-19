import React from 'react'
import Hero from '../Components/Hero'
import Scroll from '../Components/Scroll'
import PartnersPage from './PartnersPage'
import PartnerSlide from '../Components/PartnerSlide'
import SlideWords from '../Components/SlideWords'


const HomePage = () => {
  return (
    <div>
        <Hero />
        <Scroll />
        <PartnerSlide title="Working With the Best Partners in South Africa & Globally" bg_color="bg-gray-100" />
        <SlideWords />
    </div>
  )
}

export default HomePage