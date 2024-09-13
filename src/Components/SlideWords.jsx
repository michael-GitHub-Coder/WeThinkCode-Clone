import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
const SlideWords = () => {

    const slideImages = [
        {
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/mOMENTUME.jpg.webp",
          passage: "WeThinkCode_ was on a quest to get more young female participants to come on board, because coding at that time was predominantly. So we embarked as one of the initial onboarding partners for the WomenThinkCode_ initiative. The aim for that was to get atleast 50% female representation by 2023. Little did we know that we would reach that mark by 2021. ",
          name: "Nkosinathi Mahlangu",
          position: "Youth Employment Portfolio Head at Momentum Metropolitan Foundation",
        },
        {
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/GK-Logo-400x400-1.png.webp",
          passage: "We were very impressed with the level of skill and experience of the students, they have proven themselves very competent and able to join a global company and transition into a very complex environment.",
          name:"Eileen Clauss",
          position:"Senior Manager Professional Services EMEA Development",
        },
        {
          url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/b016d3_0c6f0c8522fe44d1addf676cb50bc056mv2.webp",
          passage:"BBD's three - year relationship with WeThinkCode_ has smashed the moulds of how we think about creating great software engineers in SA. Over 70 increadibly bright young people have been exposed to internships and BBD's hit ratae for converting those to graduate contracts has been 90% successful. The majority of these individuals would have been lost in the formal channels we previously relied on, so our experience is that WeThinkCode_ executes on the quality and delivers on its mandate to BBD",
          name:"Gus Pringle",
          position:"Director",
        },
        {
            url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Yoco-review.png.webp",
            passage:"WeThinkCode_ has provided us with invaluable access to a dirverse pool of exceptional individuals. It has eliminated the challenges we faced in sourcing and selecting talent. By doubling their cohort from 2020 to 2021, they significantly contributed to our achievement of hiring goals. We were fortunate to secure six remarkable women who have exceeded our expectations. The entire team, both men and women, exudes passion and enthusiasm. The outstanding results we witnessed in 2022 are a testament to their capabilities.",
            name:"Katy Shears",
            position:"Senior Programme Manager",
        },
        {
            url: "https://wethinkcode.co.za/wp-content/uploads/2024/03/Review.png.webp",
            passage:"I really do think the power of the programme is the fact that surpport for youth from low-income is built in throughout the programme. from selection through to training, student support and placement. The fact that WeThinkCode_ intergrates support across the value chain. I think that is what makes all the difference",
            name:"Ona Meyer",
            position:"Programme Manager",
        }
      ];

  return (
    <div>
        {/* partners */}
        <div className="bg-gray-100 h-[200px] mt-10">
            <h1 className="text-stone-700 text-3xl text-center py-5 font-semibold">Working With the Best Partners in South Africa & Globally</h1>
            <div className="slide-container max-w-sm ">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index} className="h-20">
                        <div className="flex justify-center">
                            <img src={slideImage.url} alt="" className="h-20 w-20 mt-10"/>
                        </div>
                </div>
                ))} 
                </Slide>
            </div>
        </div> 
        {/* partners testimonials */}
        <h1 className="text-3xl font-semibold text-stone-700 text-center mt-10">Join Managers Hiring Top Tech Talent</h1>
        <div className="slide-container">
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div key={index} className="h-[400px]">
                <div className="grid grid-cols-1">
                    <div className="flex justify-center">
                    <img src={slideImage.url} alt="" className="h-20 w-20 mt-10"/>
                    </div>
                    <p className="text-center text-sm px-5 container mx-auto max-w-5xl text-stone-400">{slideImage.passage}</p>
                    <h1 className="text-center font-semibold text-xl pt-5">{slideImage.name}</h1>
                    <p className="text-center text-stone-400">{slideImage.position}</p>
                </div>
                </div>
            ))} 
            </Slide>
        </div>
    </div>
  )
}

export default SlideWords