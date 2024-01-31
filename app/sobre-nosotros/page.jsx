"use client";
import React,{useState,useEffect} from "react";
import styles from "./sobre-nosotros.module.css";
import { Parallax } from "@/components/Parallax2";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import SmoothScrolling from "@/components/SmoothScroll";
import { ContactUs } from "@/components/ContactUs";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { db, storage } from '../../firebase/firebase';
import { collection, getDocs, doc, getDoc,where, collectionGroup } from "firebase/firestore";

const ImageList = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });

  const [opacity, setOpacity] = useState(0.35);
  const [blur, setBlur] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
 // Inside the handleScroll function in Overlay.js

// Inside the handleScroll function in Overlay.js

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const maxScroll = windowHeight * 0.5; // Adjust this factor based on how much scroll you want for full blur
  const maxBlur = 5; // Adjust this value for the maximum blur intensity
  const maxOpacity = 0.35;

  // Reference to the target div (adjust 'targetDivRef' accordingly)
  const targetDivRef = document.getElementById('prueba'); // Replace 'yourTargetDivId' with the actual id of your target div

  // Calculate blur based on scroll position
  const newBlur = Math.max(0, Math.min((scrollY / maxScroll) * maxBlur, maxBlur));

  // Calculate opacity based on scroll position using linear interpolation
  const newOpacity = maxOpacity - (scrollY / maxScroll) * maxOpacity;

  // Check if the target div is in the viewport
  if (targetDivRef) {
    const targetDivRect = targetDivRef.getBoundingClientRect();
    if (targetDivRect.top <= windowHeight && targetDivRect.bottom >= 0) {
      setBlur(0); // Set blur to 0 when the target div is in the viewport
      setOpacity(0); // Set opacity to 0 when the target div is in the viewport
      return;
    }
  }

  setBlur(newBlur);
  setOpacity(Math.max(0, newOpacity)); // Ensure opacity doesn't go below 0
};





    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [imagesLoaded, setImagesLoaded] = useState(false);
  const handleImageLoad = () => {
  
  const images = document.querySelectorAll('img');
  console.log('jnhbgftghjkmlddd',images)
  const allImagesLoaded = Array.from(images).every((image) => image.complete);

  if (allImagesLoaded) {
    setImagesLoaded(true);
  }
};
useEffect(() => {


const images = document.querySelectorAll('img');

images.forEach((image) => {
    const allImagesLoaded = Array.from(images).every((image) => image.complete);

    if (allImagesLoaded) {
      setImagesLoaded(true);
    }
  image.addEventListener('load', handleImageLoad);
});




}, []); // Run this effect only once, when the component mounts

const fetchPlayers = async () => {
  try {
    let auxPlayers=[]
    const querySnapshot = await getDocs(
      collection(db, 'players'),
      where('available', '==', true)
    );

    querySnapshot.forEach(async (playerDoc) => {
      let playereData = playerDoc.data();
      playereData.id=playerDoc.id



      if(playereData.available){
        auxPlayers.push(playereData)
      }
  
     
    });


    setPlayers(auxPlayers)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {

  fetchPlayers();

}, []);

  return (
    <>
       {/* <div className={!imagesLoaded ? "imageLoader" :"imageLoader notVisible"}>  <img className="spinner" src="/logo.webp"/>
      
      </div> */}
    <Menu/>
        <div
      className="overlay"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
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
          src={"/images/b&w/1.webp"}
          alt="Image"
          width={400}
          height={200}
          priority
          sizes="20vw"
          onLoad={handleImageLoad}
       
        />
           <Image 
          src={"/images/b&w/2.webp"}
          alt="Image"
          width={400}
          height={200}
          priority
          sizes="20vw"
          onLoad={handleImageLoad}
       
        />
        </div>
     
 
      </Parallax>

      <Parallax speed={-1} className="self-end overflow-hidden">
        <div className={styles.secondImageContainer}>
        <Image 
          src={"/images/b&w/3.webp"}
          alt="Image"
          width={600}
          height={400}
          priority
          sizes="50vw"
          onLoad={handleImageLoad}
        />
  
        <Image 
          src={"/images/b&w/4.webp"}
          alt="Image"
          width={600}
          height={400}
          priority
          sizes="50vw"
          onLoad={handleImageLoad}
        />
        </div>
      </Parallax>

      <Parallax speed={-15} className="self-center">
        <Image 
          src={"/images/b&w/5.webp"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
          onLoad={handleImageLoad}
        />
      </Parallax>

      <Parallax speed={-20} className="self-start">
        <Image 
          src={"/images/b&w/6.webp"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
          onLoad={handleImageLoad}
        />
      </Parallax>

 



   

   

      <Parallax speed={0} className="self-center" >
      <div className={styles.content} id="prueba">
        <h1   className={styles.headerPage}>SOBRE NOSOTROS</h1>
        <p className="uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg section-2-content sobre-nosotros_contentText__2YUOM">La Cocina Pickleball nace de la necesidad de llevar este deporte a todas las comunidades hispanohablantes con la oportunidad de elevar el nivel a escala profesional fuera de Estados Unidos.<br/><br/>Nuestra misión es ser la fuerza impulsora detrás del crecimiento y la excelencia del pickleball en el mundo hispanohablante, no solo a través de proporcionar productos y servicios de alta calidad que mejoren la experiencia de juego, sino que también fomenten e inspiren a una comunidad de jugadores de todos los niveles a alcanzar su máximo potencial.<br/><br/>Nuestra visión es crear una comunidad global unida por el pickleball, ofreciendo innovación constante en productos, servicios, experiencias y oportunidades de crecimiento para todas las localidades hispanohablantes. Al mirar hacia el futuro, buscamos un alto nivel de rendimiento de los jugadores para contribuir al continuo crecimiento y popularidad de este emocionante deporte sin importar en qué parte del mundo estés.</p>
      <div className={styles.grafittiSmall}>
      <img  src="/images/grafitti-pink-small.webp" onLoad={handleImageLoad} />
      </div>
      <div className={styles.playersSection}>
        <img  src="/images/grafitti-pink.webp" className={styles.grafitti}   onLoad={handleImageLoad}/>
        <p className={`uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg section-2-content ${styles.contentText2}`}>
        Contamos con jugadores de talla profesional dentro del equipo de La Cocina los cuales forman parte de la lista de invitados exclusivos a todos nuestros eventos internacionales.
          </p>

          {players.map((player,index)=>{

if (index % 2 === 1) {
  return <div className={styles.playerRight}>
  <Parallax speed={-2} className="self-end">
    <div className={styles.imageRight}>
<Image 
  src={player.image}
  alt="Image"
  width={600}
  height={400}
  priority
  onLoad={handleImageLoad}
  sizes="50vw"
/>
</div>
<h2 className={`uppercase text-sm mt-5 md:text-base lg:text-lg section-2-content`} style={{color:'white'}}>{player.name}</h2>
<p className={`uppercase text-gray-400 mt-2 text-sm md:text-base lg:text-lg section-2-content `}>
{player.description}
  </p>
</Parallax>
</div>
 
} else if (index === 0) {
 return <div className={styles.playerLeft}>
          <Parallax speed={-1} className="self-start">
        <Image 
          src={player.image}
          alt="Image"
          onLoad={handleImageLoad}
          width={600}
          height={400}
          sizes="50vw"
          priority
        />
        <h2 className={`uppercase text-sm mt-5 md:text-base lg:text-lg section-2-content`} style={{color:'white'}}>{player.name}</h2>
        <p className={`uppercase text-gray-400 mt-2 text-sm md:text-base lg:text-lg section-2-content `}>
        {player.description}
          </p>
      </Parallax>
      </div>
  console.log(`Element at index 0: ${element}`);
} else if (index % 2 === 0) {
 return <div className={styles.playerLeft2}>
  <Parallax speed={-1} className="self-start">
<Image 
  src={player.image}
  alt="Image"
  width={600}
  height={400}
  priority
  sizes="50vw"
  onLoad={handleImageLoad}
/>
<h2 className={`uppercase text-sm mt-5 md:text-base lg:text-lg section-2-content`} style={{color:'white'}}>{player.name}</h2>
<p className={`uppercase text-gray-400 mt-2 text-sm md:text-base lg:text-lg section-2-content `}>
{player.description}


  </p>
</Parallax>
</div>
}
          })}






      </div>
      <ContactUs color={'pink'} zIndex={'bottom'} footer={true}/>
      <Footer position={true}/>
      </div>
   
      </Parallax>
      </div>
      </SmoothScrolling>
    </>
  );
};

export default ImageList;


