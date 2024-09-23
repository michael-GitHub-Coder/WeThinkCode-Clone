import React, { useState } from 'react'
import { IoAddCircle } from 'react-icons/io5';
import { FaCircleMinus } from "react-icons/fa6";
const Freq = () => {

  const [isOpen1,setIsOpen1] = useState(false);
  const [isOpen2,setIsOpen2] = useState(false);
  const [isOpen3,setIsOpen3] = useState(false);
  const [isOpen4,setIsOpen4] = useState(false);

  return (
    <div className="bg-gray-100 pb-10"> 
        <h1 className="text-center font-semibold text-3xl">Frequently asked questions</h1>
        <div className=" container mx-auto max-w-2xl ">
            <div className="flex justify-between"  onClick={()=> setIsOpen1(!isOpen1)}>
                <h1 className="font-semibold ">Who can apply?</h1>
                {isOpen1 ?  <FaCircleMinus color="green" size={20}/> : <IoAddCircle color="green" size={20}/> }
            </div>
           <div className="border-b-2 border-gray-200 pt-4">
                {
                        isOpen1 && <div className="mt-5 text-gray-400 ">
                            <p className="py-5">Our goal is to provide equal access to a higher education opportunity and remove as many barriers
                        as possible. We invite anyone between the ages of 17 and 35, who is able to study full-time for two
                        years at one of our campuses in South Africa to apply. No prior education or coding experience is
                        required.</p>
                        <p className="pb-5">WeThinkCode_ is able to accept foreign applicants with permanent residency in South Africa;
                        asylum seeker visa status or a valid work permit for the three year period, including two years of
                        study and one year of work placement at a host employer.</p>
                        </div>
                    }
           </div>
            {/* feofe */}

            <div className="flex justify-between"  onClick={()=> setIsOpen2(!isOpen2)}>
                <h1 className="font-semibold pt-4">How do i apply?</h1>
                {isOpen2 ?  <FaCircleMinus color="green" size={20}/> : <IoAddCircle color="green" size={20}/> }
            </div>
           <div className="border-b-2 border-gray-200 pt-4">
                {
                        isOpen2 && <div className="mt-5 text-gray-400">
                            <p className="py-5">Apply on our website by filling in your personal details and take our entrance assessment online or
                                book to use our campus facilities on an allocated assessment day. The assessment takes 1 hour to
                                complete and requires stable internet connection.</p>
                        </div>
                    }
           </div>
            {/* dwdws */}
            <div className="flex justify-between"  onClick={()=> setIsOpen3(!isOpen3)}>
                <h1 className="font-semibold pt-4">What is a selection boot camp?</h1>
                {isOpen3 ?  <FaCircleMinus color="green" size={20}/> : <IoAddCircle color="green" size={20}/> }
            </div>
           <div className="border-b-2 border-gray-200 pt-4">
                {
                        isOpen3 && <div className="mt-5 text-gray-400">
                            <p className="py-5">The bootcamp is a 6 day selection process. It is a practical, hands on experience where applicants are
                                presented with problems to solve both as individuals and in teams. The assessment is designed for
                                both those with prior coding experience as well as applicants that have never coded before. We
                                introduce applicants to new concepts and evaluate their ability to grasp the concepts and then apply
                                them to solve problems.</p>
                        <p className="pb-5">This is the process we use to source a diverse cohort of talented people without using traditional
                                methods such as prior education and CVs.</p>
                        </div>
                    }
           </div>
            {/* efefef */}
            <div className="flex justify-between"  onClick={()=> setIsOpen4(!isOpen4)}>
                <h1 className="font-semibold pt-4">How does boot camp work?</h1>
                {isOpen4 ?  <FaCircleMinus color="green" size={20}/> : <IoAddCircle color="green" size={20}/> }
            </div>
            <div className="border-b-2 border-gray-200 pt-4">
                {
                    isOpen4 && <div className="mt-5 text-gray-400">
                        <p className="py-5">Applicants that have never coded before will begin with an introduction to programming basics
                            using an introductory programming language. Each day applicants will be required to complete a
                            series of exercises. At the end of each day, applicants will be required to complere a project
                            assessment that is used to evaluate the level of understanding and the ability to apply the concepts
                            learned.</p>
                        <p className="pb-5">Applicants with prior programming experience start with Python basics. They are required to
                            complete a series of exercises, projects and assessments designed to evaluate the level of technical
                            skills. This will be followed by a group project and exam.</p>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Freq