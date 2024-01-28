import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.module.css';
import ThePickleballHouse from '@/public/images/the-pickleball-house-logo.webp';
import { db, storage } from '../../firebase/firebase';
import { collection, getDocs, doc, getDoc,where, collectionGroup } from "firebase/firestore";
import styles from "./carousel.module.css"
// const logos1 = [
//     { source: '/images/alliances/dupr.webp', URL: 'https://mydupr.com/' },
//     { source: '/images/alliances/mlp.webp', URL: 'https://www.majorleaguepickleball.net/' },
//     { source: '/images/alliances/minorleague.webp', URL: 'https://officialminorleaguepb.com/' },
//     { source: '/images/alliances/pan.webp', URL: 'https://www.instagram.com/panvenezuela/?hl=es' },
//     { source: '/images/alliances/volair.webp', URL: 'https://volair.com/' },
//     { source: '/images/alliances/hollbrook.webp', URL: 'https://holbrookpickleball.com/' },
//     { source: '/images/alliances/merlins.webp', URL: 'https://www.mlb.com/marlins/' },
//     { source: '/images/alliances/hardrock.webp', URL: 'https://www.hardrock.com/' },
//     { source: '/images/alliances/img.webp', URL: 'https://www.img.com/' },
//     { source: '/images/alliances/caraota.webp', URL: 'https://www.caraotadigital.net/' },
//     { source: '/images/alliances/usapickleball.webp', URL: 'https://usapickleball.org/' },
//     { source: '/images/alliances/sebastianstrong.webp', URL: 'https://www.sebastianstrong.org/' },
//     { source: '/images/alliances/floridasmash.webp', URL: 'https://www.majorleaguepickleball.net/team/florida-smash/' },
//     { source: '/images/alliances/orlandosqueeze.webp', URL: 'https://orlandosqueeze.com/' },
//     { source: '/images/alliances/pello.webp', URL: 'https://www.pello.life/' },
//     { source: '/images/alliances/dolphins.webp', URL: 'https://www.miamidolphins.com/' },
//     { source: '/images/alliances/lapregunta.webp', URL: 'https://www.lapreguntapickeballstore.com/' },
//     { source: '/images/alliances/pickleballhouse.webp', URL: 'https://www.thepickleballhouse.com/' },
//     { source: '/images/alliances/meridiano.webp', URL: 'https://meridiano.net/meridianotv' },
    
//   ]
const AlianceCarousel = () => {
    const [logos, setLogos] = useState([]);
    const [settings] = useState({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1900,
        autoplaySpeed: 1900,
        cssEase: 'linear',
    });



 

      const fetchLogos = async () => {
        try {
          let auxCategories=[]
          const querySnapshot = await getDocs(collectionGroup(db, 'alliances'));
      
          querySnapshot.forEach(async (allianceDoc) => {
            let allianceData = allianceDoc.data();
            allianceData.id=allianceDoc.id
    
      
    
            auxCategories.push(allianceData)
           
          });
    
    
          setLogos(auxCategories)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
    
        fetchLogos();
      
      }, []);

    return (
        <div className="carousel-container">
            <div className="alliance">
                <h1>Nuestros Aliados</h1>
            </div>
            <div className="carousel-wrapper">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="container-carousel">
                            <a href={logo.website_url} target="_blank" rel="noopener noreferrer">
                                <img src={logo.logo} alt='logo' className={styles.img}/>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AlianceCarousel;
