import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';

const NavBar = () => {

  const Navmenu = [
    'Home', 
    'About',
    'Partner',
    'Enrol', 
    'News', 
    'Contact'
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); 

  const handleLinkClick = (link) => {
    setActiveLink(link); 
    setIsOpen(false); 
  };

  return (
    <div className="bg-white w-full px-5 md:px-0 shadow-md fixed z-50 top-0">
      <div className="container mx-auto max-w-5xl flex justify-between items-center py-5">
        <div>
          <img src={logo} alt="Logo Image" className="h-[60px] w-[60px]" />
        </div>
        <div className="flex md:hidden lg:flex gap-4">
          {isOpen ? (
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaTimes size={40} className="text-blue-500" />
            </button>
          ) : (
            <button onClick={() => setIsOpen(!isOpen)}>
              <CiMenuBurger size={40} className="text-blue-500 md:flex lg:hidden" />
            </button>
          )}
          <div className="hidden lg:flex gap-4">
            {Navmenu.map((link) => (
              <h1 key={link} className={`cursor-pointer hover:text-blue-500 ${activeLink === link ? 'text-blue-500' : ''}`} onClick={() => handleLinkClick(link)}>
                {link}
              </h1>
            ))}
          </div>
        </div>
        {isOpen && (
          <div className="fixed top-20 left-0 right-0 bottom-70 text-center text-xl text-blue-500 bg-white z-50">
            {Arr-p.map((link) => (
              <h1 key={link} className={`cursor-pointer py-1 hover:bg-gray-100 ${activeLink === link ? 'text-blue-500' : ''}`} onClick={() => handleLinkClick(link)}>
                {link}
              </h1>
            ))}
          </div>
        )}

        <div className="md:flex hidden gap-4 text-white">
          <button className="bg-green-500 bg-opacity-100 py-1 px-8">Donate</button>
          <button className="bg-blue-500 py-1 px-7">Apply Now</button>
          <FaWhatsapp size={30} className="cursor-pointer text-blue-500 hover:text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
