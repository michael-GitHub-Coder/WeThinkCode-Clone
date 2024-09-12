import React from 'react'

const Hero = () => {
  return (
    <div>
        <div style={{backgroundImage: `url("https://wethinkcode.co.za/wp-content/uploads/2024/04/WeThinkCode_-Students.jpg.webp")`,
        height:"400px",
        backgroundSize: 'cover',
        backgroundPosition: '23% 23%',
        opacity: .9}}
        >
            <div className="grid grid-cols-1">
                <h1 className="text-center py-32 text-4xl font-semibold text-white">Training Africa's Top Tech Talent</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center container mx-auto max-w-sm gap-4 lg:hidden -mt-24 md:block lg:-mt-2 text-white">
                    <button className="bg-green-500 bg-opacity-100 py-2 px-8 md:mr-4">Donate</button>
                    <button className="bg-blue-500 py-2 px-7">Apply Now</button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:flex justify-center gap-4 mt-2 lg:-mt-20 container mx-auto px-4 max-w-4xl md:relative">
            <div className="bg-blue-500 h-auto w-auto md:w-72 text-white px-5 ">
                <h1 className="text-center font-semibold py-5">Recruit</h1>
                <p className="text-center text-sm">WeThinkCode_ recruits young people that show a high aptitude for a career in software development. We specifically focus on offering opportunities to youth with no prior coding experience.</p>
                <div className="flex justify-center py-5">
                    <button className="border-2 border-white py-1.5 px-6 relative md:absolute bottom-2">Apply Now</button>
                </div>
            </div>
            <div className="bg-blue-500 h-auto w-auto md:w-72 text-white px-5 ">
                <h1 className="text-center font-semibold py-5">Train</h1>
                <p className="text-center text-sm">WeThinkCode_ trains youth in South Africa to be world-class software developers that are equipped with market-relevant programming skills, and work readiness competencies built up through the dynamic learning environment.</p>
                <div className="flex justify-center py-5 mt-4">
                    <button className="border-2 border-white py-1.5 px-6 relative md:absolute bottom-2">Sponser Learners</button>
                </div>
            </div>
            <div className="bg-blue-500 h-auto w-auto md:w-72 text-white px-5 ">
                <h1 className="text-center font-semibold py-5">Place</h1>
                <p className="text-center text-sm">The aim is to ensure that graduates leave WeThinkCode_ with a job and an accredited qualification in systems development. WeThinkCode_ has placed 91% of its graduates in permanent employment.</p>
                <div className="flex justify-center py-5">
                    <button className="border-2 border-white py-1.5 px-6 relative md:absolute bottom-2">Hire A Dev</button>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Hero