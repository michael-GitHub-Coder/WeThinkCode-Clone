import React from 'react'
import Header from '../Components/Header'
import ExecutiveSlide from '../Components/ExecutiveSlide'
import data from "../images.json"
import PartnershipTeam from '../Components/PartnershipTeam'
import Sponsergrid from '../Components/Sponsergrid'
import PartnerSlide from '../Components/PartnerSlide'
const PartnersPage = () => {
  return (
    <div>
        <Header image={"https://wethinkcode.co.za/wp-content/uploads/2024/03/Partner-hero-1.webp"} title="Become a Partner" pos="100% 50%"/>
        <Sponsergrid />
        <ExecutiveSlide />
        <PartnershipTeam />
        <PartnerSlide title="Meet our Corporate Partners" subtitle="We collaborate with our corporate partners to ensure our students gain the relevant digital and workplace skills as well as a clear pathway to employment upon graduating from WeThinkCode_."/>
    </div>
  )
}

export default PartnersPage