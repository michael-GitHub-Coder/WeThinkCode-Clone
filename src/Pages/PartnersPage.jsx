import React from 'react'
import Header from '../Components/Header'
import ExecutiveSlide from '../Components/ExecutiveSlide'
import data from "../images.json"
import PartnershipTeam from '../Components/PartnershipTeam'
import Sponsergrid from '../Components/Sponsergrid'

const PartnersPage = () => {
  return (
    <div>
        <Header image={"https://wethinkcode.co.za/wp-content/uploads/2024/04/WeThinkCode_-Students.jpg.webp"} title="Become a Partner"/>
        <Sponsergrid />
        <ExecutiveSlide />
        <PartnershipTeam />

    </div>
  )
}

export default PartnersPage