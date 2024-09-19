import React from 'react'

const News = ({image,title,para}) => {
  return (
    <div className="bg-white shadow-lg h-auto w-72 mt-40 rounded">
        <div className="h-[50%]">
            <img src={image} alt="newIMG" />
        </div>
       <div className="p-5">
            <h1 className="text-blue-500 text-md font-semibold">{title}</h1>
            <p className="text-xs text-gray-400 py-3">{para}</p>
            <button className="text-blue-500">Read More »</button>
       </div>
    </div>
  )
}

export default News