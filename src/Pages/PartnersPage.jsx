import React from 'react'
import Header from '../Components/Header'
import ExecutiveSlide from '../Components/ExecutiveSlide'
import data from "../images.json"

const PartnersPage = () => {
  return (
    <div>
        <Header image={"https://wethinkcode.co.za/wp-content/uploads/2024/04/WeThinkCode_-Students.jpg.webp"} title="Become a Partner"/>
        <div className="container mx-auto max-w-5xl text-center py-10">
            <p className="px-4 py-10 text-gray-500">Collaborate with WeThinkCode_ by investing in securing a pipeline of diverse, work-ready, entry-level software developers; by funding sustainable social impact outcomes; imparting your knowledge and experience through our mentorship and work readiness programmes.</p>
        </div>
        <div className="bg-gray-200 py-10">
            <div className="grid grid-cols-1 md:flex gap-4 pb-4 container mx-auto max-w-4xl">
                <div className="md:h-72 md:w-72 w-full relative">
                    <img src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp"/>
                    <div className="absolute bottom-0 w-full flex justify-center md:justify-start">
                        <button className="bg-green-500 text-white font-semibold py-2 px-4">Sponsor Learners</button>
                    </div>
                </div>
                <div className="md:h-72 md:w-72 w-full relative">
                    <img src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp"/>
                    <div className="absolute bottom-0 w-full flex justify-center md:justify-start">
                        <button className="bg-green-500 text-white font-semibold py-2 px-4">Hire Developer</button>
                    </div>
                </div>
                <div className="md:h-72 md:w-72 w-full relative">
                    <img src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp"/>
                    <div className="absolute bottom-0 w-full flex justify-center md:justify-start">
                        <button className="bg-green-500 text-white font-semibold py-2 px-4">Fund Impact</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto max-w-4xl">
                <div className="md:h-72 w-full relative">
                    <img src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp"  className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 w-full flex justify-center md:justify-start">
                        <button className="bg-green-500 text-white font-semibold py-2 px-4">Become A TVET Partner</button>
                    </div>
                </div>
                <div className="md:h-72 w-full relative">
                    <img src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 w-full flex justify-center md:justify-start">
                        <button className="bg-green-500 text-white font-semibold py-2 px-4">Volunteer</button>
                    </div>
                </div>
            </div>
        </div>
        <ExecutiveSlide />
        <div className="bg-gray-100 py-10">
            <h1 className="text-3xl text-stone-700 font-semibold text-center pb-10">
                Partnerships Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 container mx-auto max-w-4xl">
                <div className="text-center">
                    <img className=" object-cover mx-auto " src="https://wethinkcode.co.za/wp-content/uploads/2024/01/wethinkcode-chief-commercial-officer-sethu-komani.webp" alt="Sethu Komani"/>
                    <h1 className="text-sm text-blue-500 mt-4">Sethu Komani</h1>
                    <h1 className="text-sm">Chief Commercial Officer</h1>
                </div>
                <div className="text-center">
                    <img className=" object-cover mx-auto " src="https://wethinkcode.co.za/wp-content/uploads/2024/01/WTC-Graduation-28-1-1.webp" alt="Chris McCully"/>
                    <h1 className="text-sm text-blue-500 mt-4">Chris McCully</h1>
                    <h1 className="text-sm">Partnership Lead</h1>
                </div>
                <div className="text-center">
                    <img className=" object-cover mx-auto" src="https://wethinkcode.co.za/wp-content/uploads/2024/01/we-think-code-head-of-placements-kele-motlhamme.webp" alt="Kelebogile Motlhamme"/>
                    <h1 className="text-sm text-blue-500 mt-4">Kelebogile Motlhamme</h1>
                    <h1 className="text-sm">Director of Operations</h1>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PartnersPage