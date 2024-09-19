import React from 'react'
import News from '../Components/News'
import data from "../News.json"
import { useState } from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const NewsPage = () => {

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
      <h1 className="text-center font-bold text-stone-700 mt-36 text-3xl md:text-4xl pb-2">WeThinkCode_ News</h1>
      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3">
          { data.News.map((daa) => (
              <div className="flex justify-center">
                <News image={daa.url} title={daa.title} para={daa.para.substring(0,150)+"..."}/>
              </div>
          ))}
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
    </div>
  )
}

export default NewsPage