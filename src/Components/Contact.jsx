import React from 'react'
import { CiStar } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1>Developing the finest talent in Africa</h1>
              <p>Your future in tech starts here. Apply now and pave the way for your journey toward success.</p>

              <div >
                <CiStar color="#f59e0b"/>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact