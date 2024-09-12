import React, { useState } from 'react'
import logo from '../Images/logo.png'
import { FaWhatsapp } from 'react-icons/fa'
import { FaBurger } from 'react-icons/fa6'
import { CiMenuBurger } from 'react-icons/ci'

const NavBar = () => {

    const [isOpen,setIsopen] = useState(false)

  return (
    <div className="bg-white w-full px-5 md:px-0 shadow-md fixed z-50 top-0">
        <div className="container mx-auto max-w-5xl flex justify-between justify-center items-center py-5">
            <div className="">
                <img src={logo} alt="Logo Image"  className="h-[60px] w-[60px]"/>
            </div>
            <div className="flex md:hidden lg:flex gap-4">
                <CiMenuBurger size={40} className="text-blue-500 md:flex lg:hidden" />
                <div className="hidden lg:flex gap-4">
                    <h1 className="cursor-pointer hover:text-blue-500">Home</h1>
                    <h1 className="cursor-pointer hover:text-blue-500">About</h1>
                    <h1 className="cursor-pointer hover:text-blue-500">Partner</h1>
                    <h1 className="cursor-pointer hover:text-blue-500">Enrol</h1>
                    <h1 className="cursor-pointer hover:text-blue-500">News</h1>
                    <h1 className="cursor-pointer hover:text-blue-500">Contact</h1>
                </div>
            </div>


            <div className="md:flex hidden gap-4 text-white">
                <button className="bg-green-500 bg-opacity-100 py-1 px-8">Donate</button>
                <button className="bg-blue-500 py-1 px-7">Apply Now</button>
                <FaWhatsapp size={30} className="cursor-pointer text-blue-500 hover:text-green-500" />
            </div>

        </div>
    </div>
  )
}

export default NavBar