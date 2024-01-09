"use client";
import React,{useState,useEffect} from "react";
import styles from "./sobre-nosotros.module.css";
import { Parallax } from "@/components/Parallax2";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import SmoothScrolling from "@/components/SmoothScroll";
import { ContactUs } from "@/components/ContactUs";
import Menu from "@/components/Menu";

const ImageList = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });

  const [opacity, setOpacity] = useState(0);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
 // Inside the handleScroll function in Overlay.js

// Inside the handleScroll function in Overlay.js

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const maxScroll = windowHeight * 0.5; // Adjust this factor based on how much scroll you want for full blur
  const maxBlur = 10; // Adjust this value for the maximum blur intensity

  // Reference to the target div (adjust 'targetDivRef' accordingly)
  const targetDivRef = document.getElementById('prueba'); // Replace 'yourTargetDivId' with the actual id of your target div
console.log(targetDivRef)
  // Calculate blur based on scroll position
  const newBlur = Math.max(0, Math.min((scrollY / maxScroll) * maxBlur, maxBlur));

  // Check if the target div is in the viewport
  if (targetDivRef) {
    const targetDivRect = targetDivRef.getBoundingClientRect();
    if (targetDivRect.top <= windowHeight && targetDivRect.bottom >= 0) {
      setBlur(0); // Set blur to 0 when the target div is in the viewport
      return;
    }
  }

  setBlur(newBlur);
};



    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <Menu/>
        <div
      className="overlay"
      style={{
        backgroundColor: `rgba(0, 0, 0, 0.35)`,
        backdropFilter:`blur(${blur}px)`,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allow clicks to go through the overlay
        zIndex: 999, // Adjust this value based on your layout
      }}
    />
    <SmoothScrolling>
    <div className={styles.main}>
      {/* <button
        href="#last-image"
        onClick={() => lenis.scrollTo("#last-image", { lerp: 0.01 })}
        // lenis is the object returned from useLenis, and it has a method called scrollTo() that takes two arguments, the first is the id of the element you want to scroll to, and the second is the options object, here we set the lerp to 0.01 to make the scroll slower
        className="bg-white text-black capitalize p-4 font-semibold text-xl mt-16 hover:bg-white/90"
      >
        scroll to anchor
      </button> */}

      <Parallax speed={1} className="self-start">
        <div className={styles.firstImageContainer}>
   <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={400}
          height={200}
          priority
          sizes="20vw"
       
        />
           <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={400}
          height={200}
          priority
          sizes="20vw"
       
        />
        </div>
     
 
      </Parallax>

      <Parallax speed={-1} className="self-end overflow-hidden">
        <div className={styles.secondImageContainer}>
        <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={600}
          height={400}
          priority
          sizes="50vw"
        />
  
        <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={600}
          height={400}
          priority
          sizes="50vw"
        />
        </div>
      </Parallax>

      <Parallax speed={-15} className="self-center">
        <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-20} className="self-start">
        <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>

 



   

   

      <Parallax speed={0} className="self-center" >
      <div className={styles.content} id="prueba">
        <h1   className={styles.headerPage}>SOBRE NOSOTROS</h1>
        <p className={`uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg section-2-content ${styles.contentText}`}>La Cocina Pickleball nace de la necesidad de llevar este deporte a todas las comunidades hispanohablantes con la oportunidad de elevar el nivel a escala profesional fuera de Estados Unidos.<br/><br/>Nuestra misión es ser la fuerza impulsora detrás del crecimiento y la excelencia del pickleball en el mundo hispanohablante, no solo a través de proporcionar productos y servicios de alta calidad que mejoren la experiencia de juego, sino que también fomenten e inspiren a una comunidad de jugadores de todos los niveles a alcanzar su máximo potencial.<br/><br/>Nuestra visión es crear una comunidad global unida por el pickleball, ofreciendo innovación constante en productos, servicios, experiencias y oportunidades de crecimiento para todas las localidades hispanohablantes. Al mirar hacia el futuro, buscamos un alto nivel de rendimiento de los jugadores para contribuir al continuo crecimiento y popularidad de este emocionante deporte sin importar en qué parte del mundo estés.</p>
      <div className={styles.grafittiSmall}>
      <img src="/images/grafitti-pink-small.png"  />
      </div>
      <div className={styles.playersSection}>
        <img src="/images/grafitti-pink.png" className={styles.grafitti}/>
        <p className={`uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg section-2-content ${styles.contentText2}`}>
        Contamos con jugadores de talla profesional dentro del equipo de La Cocina los cuales forman parte de la lista de invitados exclusivos a todos nuestros eventos internacionales.
          </p>
<div className={styles.playerLeft}>
          <Parallax speed={-1} className="self-start">
        <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
        <h2 className={`uppercase text-sm mt-5 md:text-base lg:text-lg section-2-content`} style={{color:'white'}}>Jhonnatan Medina Álvarez</h2>
        <p className={`uppercase text-gray-400 mt-2 text-sm md:text-base lg:text-lg section-2-content `}>
        Actual jugador clasificado en el Top 3 de individuales en la APP. 5 medallas (1 de oro, 2 de plata y 2 de bronce) en torneos individuales de la temporada 2023 de la APP. Clasificado como el jugador número 1 en Virginia y Venezuela.
          </p>
      </Parallax>
      </div>

      <div className={styles.playerRight}>
          <Parallax speed={-2} className="self-end">
            <div className={styles.imageRight}>
        <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
        </div>
        <h2 className={`uppercase text-sm mt-5 md:text-base lg:text-lg section-2-content`} style={{color:'white'}}>Glauka Carvajal Lane</h2>
        <p className={`uppercase text-gray-400 mt-2 text-sm md:text-base lg:text-lg section-2-content `}>
        Actualmente clasificada en el Top 25 de jugadores individuales de la PPA (Mejor Ranking -22).
          </p>
      </Parallax>
      </div>

      <div className={styles.playerLeft2}>
          <Parallax speed={-1} className="self-start">
        <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
        <h2 className={`uppercase text-sm mt-5 md:text-base lg:text-lg section-2-content`} style={{color:'white'}}>Judit Castillo</h2>
        <p className={`uppercase text-gray-400 mt-2 text-sm md:text-base lg:text-lg section-2-content `}>
        Top 5 individuales femeninos de la PPA. 7 medallas (1 de oro, 2 de plata y 4 de bronce)


          </p>
      </Parallax>
      </div>

      <div className={styles.playerRight}>
          <Parallax speed={-2} className="self-end">
        <Image
          src={"/images/pr-event/pr-event-1.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
        <h2 className={`uppercase text-sm mt-5 md:text-base lg:text-lg section-2-content`} style={{color:'white'}}>María Lopez</h2>
        <p className={`uppercase text-gray-400 mt-2 text-sm md:text-base lg:text-lg section-2-content `}>
        #1 de Venezuela en Tenis y selección nacional en múltiples ocasiones, Top 100 en dobles ITF Juniors de la NCAA, X2 Campeona Nacional de NCAA como entrenadora, entrenadora de jugadora TOP 50 en el ranking del WTA.
          </p>
      </Parallax>
      </div>

      </div>
      <ContactUs color={'pink'} zIndex={'bottom'}/>
      </div>
   
      </Parallax>
      </div>
      </SmoothScrolling>
    </>
  );
};

export default ImageList;

