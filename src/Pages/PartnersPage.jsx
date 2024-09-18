import React from 'react'
import Header from '../Components/Header'
import ExecutiveSlide from '../Components/ExecutiveSlide'

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
    </div>
  )
}

export default PartnersPage