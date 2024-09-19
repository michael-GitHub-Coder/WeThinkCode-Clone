import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import '../index.css'

const Scroll = () => {

    const slideImages = [
        {
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Philani-Ngcamu_Glass.webp",
        },
        {
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Aaliyah-Jardien-glass.webp",
        },
        {
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Antonio-Ambrosini-glass.webp",
         }
        // {
        //     url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Buhle-Matikiti-glass.webp",
        // },
        // {
        //     url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Anemieke-van-Vuuren_Glass.webp",
        // },
        // {
        //     url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Nompumelelo-Ncokwane-noncok022.webp",
        // },
        // {
        //     url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Chelsea-Davids-glass.webp",
        // },
        // {
        //     url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Sinesipho-Mbusi-simbusi022.webp",
        // },
        // {
        //     url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Yamkela-Jojo_Glass.webp",
        // }
      ];

  return (
  
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-4xl my-10 px-4">
        {/* card 1 */}
        <div className="mt-20">
            <h1 className="text-stone-600 text-3xl font-semibold py-2 pb-5">Bridging the Tech Skills gap</h1>
            <p className="text-stone-400 text-sm pb-5">WeThinkCode_ is a South African software development academy tackling the technical skills shortage and youth unemployment. We recruit talented youth, providing specialized training to turn them into proficient backend developers in 16 months using our tailored curriculum and learning system.</p>
            <div className="py-5">
                <button className="bg-green-600 px-4 py-2 text-white">Learn More</button>
            </div>
        </div>

        {/* card 2 */}
        <div className="slide-container custom-slide">
            <Slide duration={5000} arrows={20}>
            {slideImages.map((slideImage, index)=> (
                <div key={index}>
                <div style={{ 'backgroundImage': `url(${slideImage.url})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                height: "420px"}}>
                </div>
                </div>
            ))} 
            </Slide>
        </div>
    </div>
  )
}

export default Scroll