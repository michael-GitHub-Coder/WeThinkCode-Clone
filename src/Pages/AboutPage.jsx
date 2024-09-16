import React from 'react'
import OurImpact from '../Components/OurImpact'
import Gray from '../Components/Gray'
import Header from '../Components/Header'

const AboutPage = () => {
  return (
    <div>
        <Header image={"https://wethinkcode.co.za/wp-content/uploads/2024/04/WeThinkCode_-Students.jpg.webp"}  title="Our Story"/>
        <Gray />
        <OurImpact />
    </div>
  )
}

export default AboutPage