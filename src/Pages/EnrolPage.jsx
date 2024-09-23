import React from 'react'
import Header from '../Components/Header'
import { useState } from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import Freq from '../Components/Freq';

const EnrolPage = () => {

  const [isExpanded, setIsExpanded] = useState(true);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("https://youtu.be/8Xgf7mOnRb4");

  const videos = [
      {
          url: "https://youtu.be/8Xgf7mOnRb4",
          title: "#HireTheFuture from WeThinkCode_",
          duration: "1:13",
      },
      {
          url: "https://youtu.be/aV0h6ZR8zyU",
          title: "System Verification & WeThinkCode Podcast: Test Automation & Quality Assurance",
          duration: "41:13",
      },
      {
          url: "https://youtu.be/S47c0Qos-eQ?t=4",
          title: "WeThinkCode_ Attains NQF 6 Occupational Certificate Accredited by Q",
          duration: "0:24",
      },
      {
          url: "https://youtu.be/zCT7PlTNSoc?t=1",
          title: "Getting more women into tech",
          duration: "6:23",
      }
  ];
  const getVideoId = (url) => {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtu.be') {
          return urlObj.pathname.substring(1);
      }
      return urlObj.searchParams.get('v');
  };

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

      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:flex gap-3 mt-10 ">
                <div className="md:col-span-2 ">
                    {/* TODO: */}
                    <iframe
                        width="100%"
                        height="340"
                        src={`https://www.youtube.com/embed/${getVideoId(currentVideoUrl)}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="md:w-[600px]"
                    />

                </div>
                {/* Titles */}
                <div>
                    <div className="flex gap-20">
                        <h1 className="font-stone-700 font-semibold">WeThinkCode_</h1>
                        <h1 onClick={() => setIsExpanded(!isExpanded)} className="flex gap-2">
                            {videos.length} Videos
                            {isExpanded ? <BiSolidUpArrow className="md:hidden mt-1.5" /> : <BiSolidDownArrow className="md:hidden mt-1.5" />}
                        </h1>
                    </div>
                    <div className="hidden md:block">
                        {videos.map((video) => (
                            <div key={video.url} onClick={() => setCurrentVideoUrl(video.url)} className="flex gap-6 hover:bg-gray-100 cursor-pointer">
                                <h1 className="text-sm py-2 text-red-400 hover:text-gray-400">{video.title.substring(0, 25)}</h1>
                                <h1 className="mt-2">{video.duration}</h1>
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden">
                        {isExpanded && videos.map((video) => (
                            <div key={video.url} onClick={() => setCurrentVideoUrl(video.url)} className="flex gap-6 hover:bg-gray-100 cursor-pointer">
                                <h1 className="text-sm py-2 text-red-400 hover:text-gray-400">{video.title.substring(0, 25)}</h1>
                                <h1 className="mt-2">{video.duration}</h1>
                            </div>
                        ))}
                    </div>
                </div>
      </div>
      <Freq />
    </div>
  )
}

export default EnrolPage