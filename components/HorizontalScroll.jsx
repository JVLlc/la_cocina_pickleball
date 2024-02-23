import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HomeCard } from "./HomeCard";



function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-120vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    };
  }, []);


  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
   
      <div ref={triggerRef}>
      <img className="grafitti1" src="./images/grafitti1.webp" />
          <img className="arrow" src="./images/arrow-down.webp" />
          <img
            src="./logo.webp"
            alt="La Cocina Pickleball Logo"
            className="w-1/2 md:w-auto lg:w-auto max-w-sm md:max-w-full lg:max-w-full h-auto absolute top-5 left-5"
          />

          <h1 className="text-sm md:text-base lg:text-lg text-gray-400 fixed bottom-0 left-5 casa-del-pickleball">
            LA CASA DEL PICKLEBALL EN ESPAÑOL
          </h1>
        <div ref={sectionRef} className="scroll-section-inner">
    
          <div className="scroll-section">
          <HomeCard route={'/eventos'} position={'first'} image={"./images/1.webp"} imageHover={"./images/2.webp"} title={"Eventos"}/>
          </div>
          <div className="scroll-section">
          <HomeCard route={'/catalogo'} position={'middle'} image={"./images/4.webp"} imageHover={"./images/3.webp"} title={"Catálogo"}/>
          </div>
          <div className="scroll-section">
         
  <HomeCard position={'last'} route={'/sobre-nosotros'} image={"./images/6.webp"} imageHover={"./images/7.webp"} title={"Sobre Nosotros"}/>
          </div>
     
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;