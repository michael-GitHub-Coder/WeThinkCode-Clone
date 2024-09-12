import React from 'react'
import { IoIosStar } from "react-icons/io";


const Contact = () => {
  return (
    <div className="bg-gray-100 h-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-4xl gap-5">
            <div>
              <h1 className="font-semibold text-2xl py-4">Developing the finest talent in Africa</h1>
              <p>Your future in tech starts here. Apply now and pave the way for your journey toward success.</p>

              <div className="flex pt-4">
              <IoIosStar color="#f59e0b"/>
              <IoIosStar color="#f59e0b"/>
              <IoIosStar color="#f59e0b"/>
              <IoIosStar color="#f59e0b"/>
              <IoIosStar color="#f59e0b"/>
              </div>
              <p>Rated Excellent (285+ Reviews)</p>
            </div>
            {/* form */}

            <div>
              <form>
                  <div className="flex gap-4 ">
                    <input type="text" placeholder="Name" className="py-3 px-5" />
                    <input type="text" placeholder="Surname" className="py-3 px-5"/>
                  </div>
                  <div className="flex gap-4 py-2 ">  
                    <input type="text" placeholder="Email Address" className="py-3 px-5"/>
                    <input type="text" placeholder="Phone Number" className="py-3 px-5"/>
                  </div>
                  <select className="block px-3 py-2 border border-gray-300 focus:outline-none pt-2">
                      <option value="" >What would you like to enquire about?</option>
                      <option value="option1">General</option>
                      <option value="option2">Students</option>
                      <option value="option3">Marketing Enquiry</option>
                      <option value="option3">Applications</option>
                  </select>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact