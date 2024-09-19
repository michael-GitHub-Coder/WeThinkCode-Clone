import React from 'react'
import Header from '../Components/Header'

const EnrolPage = () => {
  return (
    <div>
      <Header image={"https://wethinkcode.co.za/wp-content/uploads/2024/03/Enrol-header.webp"} title="Kickstart your career in tech"  pos="500% 403%" />
      <div className="bg-gray-100 ">
        <div className="container mx-auto max-w-5xl py-10"> 
          <p className="text-center text-gray-700 pb-4">WeThinkCode_ is a software development training academy addressing the technical skills shortage in South Africa. Students enrolled in the academy undergo 16 months of full-time, on-campus training at one of our 5 campus locations in Gauteng, Western Cape and KwaZulu-Natal. At the end of the training students with the relevant pre-requisite accreditation earn an NQF 6 Occupational Certificate in Software Engineering.</p>
          <p className="text-center text-gray-700">Why WeThinkCode_ should be your first choice tertiary institution is that we make it our responsibility to place students on internships at the end of the training to help students secure their first permanent job.</p>
          <div className="flex justify-center mt-8">
              <button className="bg-green-500 py-1.5 px-7 text-white">Apply Now</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default EnrolPage