import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-blue-500 pb-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1  md:flex md:gap-20">
          {/* JHB */}
            <div className="text-white text-center mb-5 md:py-10">
              <div className="text-white flex justify-center">
                <IoLocationOutline size={40}/>
              </div>
              <h1 className="font-semibold text-md md:py-4">Johannesburg</h1>
              <p className="text-[13px]">132 Jan Smuts Avenue Parkwood, Johannesburg,<br></br> 2193</p>
            </div>
          {/* CPT */}
          <div className="text-white mb-5 text-center md:py-10">
              <div className="text-white flex justify-center">
              <IoLocationOutline size={40}/>
              </div>
              <h1 className="font-semibold text-md md:py-4">Cape Town</h1>
              <p className="text-[13px]">331 Albert Street, Woodstock,<br></br> 
              Cape Town, 7915</p>
            </div>
          {/* DBN */}
          <div className="text-white  mb-5 text-center md:py-10">
              <div className="text-white flex justify-center">
              <IoLocationOutline size={40}/>
              </div>
              <h1 className="font-semibold text-md md:py-4">Durban</h1>
              <p className="text-[13px]">Durban Club Chambers,
              8th Floor Durban Club Pl,<br></br> Durban Central, 4001</p>
            </div>
          {/* mail */}
          <div className="text-white mb-5 text-center md:py-10">
              <div className="text-white flex justify-center">
              <TfiEmail size={40}/>
              </div>
              <h1 className="font-semibold text-md md:py-4">Email</h1>
              <p className="text-sm">info@wethinkcode.co.za</p>
          </div>
          {/* Scan to whatApp */}
          <div className="text-white mb-5 text-center md:py-10">
             <div className="flex justify-center">
              <img src="https://wethinkcode.co.za/wp-content/uploads/2022/10/qrcode_whatsapp.png.webp" alt="Scan to WhatsApp" 
                className="h-[140px] w-[200px]" />
             </div>
              <p className="italic text-sm">Scan to WhatsApp</p>
              <div className="flex justify-center  gap-4 mb-4">
                  <FaFacebook size={17} />
                  <FaTwitter  size={17}/>
                  <FaYoutube size={17} />
                </div>
              <div className="flex justify-center gap-4 ">
                  <FaInstagram size={17} />
                  <FaLinkedin size={17} />
                  <FaTiktok size={17}/>
              </div>
          </div>
         
        </div>
        <div className="flex justify-center border-t-2 border-t-white">
          <p className="text-[17px] text-white pt-2">© Copyright | WeThinkCode_</p>
        </div>
    </div>
  )
}

export default Footer