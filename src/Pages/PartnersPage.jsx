import React from 'react'
import Header from '../Components/Header'

const PartnersPage = () => {
  return (
    <div>
        <Header image={"https://wethinkcode.co.za/wp-content/uploads/2024/04/WeThinkCode_-Students.jpg.webp"} title="Become a Partner"/>
        <div className="container mx-auto max-w-5xl text-center py-10">
            <p className="py-10 text-gray-500">Collaborate with WeThinkCode_ by investing in securing a pipeline of diverse, work-ready, entry-level software developers; by funding sustainable social impact outcomes; imparting your knowledge and experience through our mentorship and work readiness programmes.</p>
        </div>
        <div className="grid grid-cols-1 md:flex gap-4 pb-4 container mx-auto max-w-4xl">
            <div className="md:h-72 md:w-72 w-full relative">
                <img src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp"/>
                <div className="absolute bottom-0 left-0">
                    <button className="bg-green-600 text-white font-semibold py-2 px-4">Sponsor Learners</button>
                </div>
            </div>
            <div className="md:h-72 md:w-72 w-full">
                <img src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp"/>
            </div>
            <div className="md:h-72 md:w-72 w-full">
                <img src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp"/>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto max-w-4xl">
            <div className="md:h-72 w-full">
                <img 
                    src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp" 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="md:h-72 w-full">
                <img 
                    src="https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp" 
                    className="w-full h-full object-cover" 
                />
            </div>
        </div>
    </div>
  )
}

export default PartnersPage