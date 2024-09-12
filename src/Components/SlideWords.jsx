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
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/GK-Logo-400x400-1.png.webp",
          caption: 'Slide 2'
        },
        {
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/b016d3_0c6f0c8522fe44d1addf676cb50bc056mv2.webp",
          caption: 'Slide 3'
        },
        {
            url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Yoco-review.png.webp",
        },
        {
            url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Review.png.webp",
        }
      ];

  return (
    <div>
    <h1 className="text-3xl font-semibold text-stone-700 text-center mt-10">Join Managers Hiring Top Tech Talent</h1>
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index} className="h-[400px]">
              <div className="flex justify-center">
                    <img src={slideImage.url} alt="" className="h-20 w-20 mt-10"/>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>
  )
}

export default SlideWords