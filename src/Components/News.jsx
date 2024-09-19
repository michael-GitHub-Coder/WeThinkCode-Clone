import React from 'react';

const News = ({ image, title, para }) => {
  return (
    <div className="bg-white shadow-lg h-[450px] w-72 rounded mt-5 pb-5">
      <div className="relative h-1/2">
        <img
          src={image}
          alt="newIMG"
          className="absolute inset-0 w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="px-5 py-2 ">
        <h1 className="text-blue-500 text-md font-semibold">{title}</h1>
        <p className="text-xs text-gray-400 py-3">{para}</p>
        <button className="text-blue-500">Read More »</button>
      </div>
    </div>
  );
};

export default News;
