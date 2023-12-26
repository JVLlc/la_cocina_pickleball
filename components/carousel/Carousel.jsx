import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.module.css';
import ThePickleballHouse from '@/public/images/the-pickleball-house-logo.jpeg';

const AlianceCarousel = () => {
    const [settings] = useState({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1900,
        autoplaySpeed: 1900,
        cssEase: 'linear',
    });

    console.log(ThePickleballHouse);

    const logos = [
        { source: 'https://mydupr.com/img/dupr_light.svg', URL: 'https://mydupr.com/' },
        { source: 'https://www.majorleaguepickleball.net/wp-content/uploads/2022/12/mlp_logo_white.svg', URL: 'https://www.majorleaguepickleball.net/' },
        { source: 'https://officialminorleaguepb.com/wp-content/uploads/2022/12/logo-minor-league-pickleball-navy.svg', URL: 'https://officialminorleaguepb.com/' },
        { source: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Isologotipo_de_Harina_PAN.png', URL: 'https://www.instagram.com/panvenezuela/?hl=es' },
        { source: 'https://volair.com/cdn/shop/files/Volair_Logo_WhiteBlueDot_ForWeb_100x@2x.png?v=1668168734', URL: 'https://volair.com/' },
        { source: 'https://holbrookpickleball.com/cdn/shop/files/Black_Transparent_HP_1.png?v=1658515711&width=300', URL: 'https://holbrookpickleball.com/' },
        { source: 'https://www.mlbstatic.com/team-logos/team-cap-on-dark/146.svg', URL: 'https://www.mlb.com/marlins/' },
        { source: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Hard_Rock_Cafe_Logo.svg', URL: 'https://www.hardrock.com/' },
        { source: 'https://dyl347hiwv3ct.cloudfront.net/app/uploads/2023/08/IMG_Logo_White.svg.gzip', URL: 'https://www.img.com/' },
        { source: 'https://www.caraotadigital.net/wp-content/uploads/2023/01/LOGO14x-1.png', URL: 'https://www.caraotadigital.net/' },
        { source: 'https://usapickleball.org/wp-content/uploads/2020/06/USAPA_Logo_Header.png', URL: 'https://usapickleball.org/' },
        { source: 'https://www.sebastianstrong.org/wp-content/uploads/2021/03/SEBASTIANSTRONG_-copy.png', URL: 'https://www.sebastianstrong.org/' },
        { source: 'https://www.majorleaguepickleball.net/wp-content/uploads/Florida-Smash.svg', URL: 'https://www.majorleaguepickleball.net/team/florida-smash/' },
        { source: 'https://orlandosqueeze.com/cdn/shop/files/orlsqueeze_primary.png?v=1675743017&width=254', URL: 'https://orlandosqueeze.com/' },
        { source: 'https://www.pello.life/cdn/shop/files/Pello_Logo_d906128c-e9bc-4b07-bfa1-1ffb1aaed89d.png?v=1682095943&width=254', URL: 'https://www.pello.life/' },
        { source: 'https://freepngimg.com/thumb/dolphin/157584-miami-dolphins-hd-image-free.png', URL: 'https://www.miamidolphins.com/' },
        { source: 'https://static.wixstatic.com/media/908838_6b864d7d055b42d981e7ff3cc9805459~mv2.png/v1/crop/x_0,y_524,w_1080,h_333/fill/w_816,h_252,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/908838_6b864d7d055b42d981e7ff3cc9805459~mv2.png', URL: 'https://www.lapreguntapickeballstore.com/' },
        { source: ThePickleballHouse.src, URL: 'https://www.thepickleballhouse.com/' },
        { source: 'https://s3.us-east-1.amazonaws.com/forofms.na/monthly_2021_06/large.MeridianoTV2019-1.png.9661aff70f49ae70a9c38a5d7b575ce9.png', URL: 'https://meridiano.net/meridianotv' },
        
      ]

    return (
        <div className="carousel-container">
            <div className="alliance">
                <h1>Nuestros Aliados</h1>
            </div>
            <div className="carousel-wrapper">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="container-carousel">
                            <a href={logo.URL} target="_blank" rel="noopener noreferrer">
                                <img src={logo.source} alt='logo' />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AlianceCarousel;
