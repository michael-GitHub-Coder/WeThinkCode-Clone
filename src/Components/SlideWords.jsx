import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
const SlideWords = () => {

    const slideImages = [
        {
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/mOMENTUME.jpg.webp",
          caption: 'Slide 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          caption: 'Slide 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 3'
        },
      ];

  return (
    <div>
    <h1 className="text-3xl font-semibold text-stone-700 text-center">Join Managers Hiring Top Tech Talent</h1>
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index} className="h-[200px]">
              <img src={slideImage.url} alt="" />
            </div>
          ))} 
        </Slide>
      </div>
    </div>
  )
}

export default SlideWords