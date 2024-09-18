import React from 'react'

const PartnershipTeam = () => {
  return (
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
  )
}

export default PartnershipTeam