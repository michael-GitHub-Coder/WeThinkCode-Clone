import React from 'react';
import Slider from 'react-slick';
import '../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../images.json"

const ExecutiveSlide = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,  
        autoplaySpeed: 3000,
        slidesToShow: 4,
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
        <div className="container mx-auto max-w-4xl my-10">
          <h1 className="text-center text-stone-700 pb-8 font-semibold text-4xl">Executive Management</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    {data.slideImages.map((slide, index) => (
                        <div key={index} className="px-4">
                            <img src={slide.url} className="w-full h-auto" alt={slide.name} />
                            <h1 className="text-sm text-blue-500 text-center">{slide.name}</h1>
                            <h1 className="text-sm text-center">{slide.pos}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ExecutiveSlide;
