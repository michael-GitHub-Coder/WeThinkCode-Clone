import React from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { useState } from 'react';
const Gray = () => {

    const [UpDown, setUpDown] = useState(true)

    const links = [
        {
            url:"https://www.youtube.com/watch?v=s4VqbT8TaFY&t=5s",
            title: "#HireTheFuture from WeThinkCode_",
            duration: "1:13",
        },
        {
            url:"https://youtu.be/cBedCPziUt0",
            title: "Partner with WeThinkCode_",
            duration: "1:47",
        },
        {
            url:"https://youtu.be/_J3fnkneKcY",
            title: "WeThinkCode_ creates new career pathways ...",
            duration: "1:58",
        },
        {
            url:"https://youtu.be/gqNYTwzAVsc",
            title: "WeThinkCode_ Connects Entry-Level Developers...",
            duration: "1:47",
        },
        {
            url:"https://youtu.be/4yruuACzd0M",
            title: "Reshaping Futures with Tech",
            duration: "6:04",
        },
        {
            url:"https://youtu.be/7oOq8EAt7oY",
            title: "Momentum Group Enhancing Digital Skills With....",
            duration: "6:04",
        },
    ];
  return (
    <div>
        <div className="bg-gray-100">
            <div className="container mx-auto max-w-5xl text-center mt-40 px-4">
                <p className="py-5">WeThinkCode_ was established in 2015 and launched its inaugural cohort in 2016 in Johannesburg, South Africa. It has since grown, extending its footprint to Cape Town (2018) and Durban (2021), and is now delivering its proven curriculum at public technical vocational education and training (TVET) colleges in South Africa.</p>
                <p className="py-5">WeThinkCode_ is a registered non-profit company (NPC) and public benefit organisation (PBO) whose business model works across the youth development value chain to recruit youth with a high aptitude to code, train them rigorously over 16 months and place them into jobs as software developers within South Africa’s most reputable and innovative businesses.</p>
                <p className="py-5">WeThinkCode_’s purpose is to shift Africa from consumption to the creation of tech.</p>
            </div>
        </div>

        {/* Vids */}

        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:flex gap-3 mt-10 px-4">
           <div className=" md:col-span-2">
                <video width="600" controls>
                    <source src="https://www.youtube.com/watch?v=s4VqbT8TaFY&t=5s" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
           </div>
           {/* Titles  */}
          <div>
            <div className="flex gap-20">
                <h1 className="font-stone-700 font-semibold">WeThinkCode_</h1>
                <h1 onClick={()=> setUpDown(!UpDown)} className="flex gap-2">{links.length} Videos {UpDown ?  <BiSolidUpArrow className="md:hidden mt-1.5"/> : <BiSolidDownArrow className="md:hidden mt-1.5"/>}</h1>
            </div>
            <div className="hidden md:block">
                {links.map((links) => (
                    <div className="flex gap-6 hover:bg-gray-100">
                        <h1 className="text-sm py-2 text-red-400  hover:text-gray-400">{links.title.substring(0,25)}</h1>
                        <h1 className="mt-2">{links.duration}</h1>
                    </div>
                ))}
            </div>
            <div className="md:hidden">
                {links.map((links) => (
                    UpDown && 
                    <div className="flex gap-6 hover:bg-gray-100">
                        <h1 className="text-sm py-2 text-red-400  hover:text-gray-400">{links.title.substring(0,25)}</h1>
                        <h1 className="mt-2">{links.duration}</h1>
                    </div>
                ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Gray