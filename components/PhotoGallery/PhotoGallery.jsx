import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.module.css';
import ThePickleballHouse from '@/public/images/the-pickleball-house-logo.webp';

const PhotoGallery = ({ logos }) => {
    const [settings] = useState({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1900,
        autoplaySpeed: 1900,
        cssEase: 'linear',
    });

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="container-gallery">
                            <a href={logo.URL || ""} target="_blank" rel="noopener noreferrer">
                                <img src={ logo} alt='logo' />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PhotoGallery;
