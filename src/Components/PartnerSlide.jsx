import React from 'react'
import Slider from 'react-slick';
import '../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../Partners.json"

const PartnerSlide = ({title,subtitle,bg_color}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,  
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
   <div className={` ${bg_color}`}>
        <div className="container mx-auto max-w-4xl py-10">
            <h1 className="text-stone-700 text-4xl text-center font-semibold py-5">{title}</h1>
            <p className="text-stone-500 text-center pb-5">{subtitle}</p>
            <div className="slider-container py-5">
                <Slider {...settings}>
                    {data.partners.map((slide, index) => (
                        <div key={index} className="px-4">
                            <img src={slide.url} className="w-20 h-20" alt={slide.name} />
                            <h1 className="text-sm text-blue-500 text-center">{slide.name}</h1>
                            <h1 className="text-sm text-center">{slide.pos}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
   </div>
  )
}

export default PartnerSlide