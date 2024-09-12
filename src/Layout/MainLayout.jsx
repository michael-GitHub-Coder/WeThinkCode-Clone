import React from 'react'
import NavBar from '../Components/NavBar'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Contact />
        <Footer />
    </div>
  )
}

export default MainLayout