import React from 'react'
import News from '../Components/News'
import data from "../News.json"


const NewsPage = () => {

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
    </div>
  )
}

export default NewsPage