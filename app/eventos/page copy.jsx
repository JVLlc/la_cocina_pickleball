"use client";
import React, { useState,useRef,useEffect } from "react";
import styles from "./eventos.module.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Parallax } from "@/components/Parallax";
import EventSelector from "@/components/EventSelector";
import { ContactUs } from "@/components/ContactUs";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import MiamiEvent1 from "@/public/images/miami-event/miami-event-1.webp"
import MiamiEvent2 from "@/public/images/miami-event/miami-event-2.webp"
import MiamiEvent3 from "@/public/images/miami-event/miami-event-3.webp"
import MiamiEvent4 from "@/public/images/miami-event/miami-event-4.webp"
import MiamiEvent5 from "@/public/images/miami-event/miami-event-5.webp"
import MiamiEvent6 from "@/public/images/miami-event/miami-event-6.webp"
import MiamiEvent7 from "@/public/images/miami-event/miami-event-7.webp"
import MiamiEvent8 from "@/public/images/miami-event/miami-event-8.webp"
import MiamiEvent9 from "@/public/images/miami-event/miami-event-9.webp"
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { db, storage } from '../../firebase/firebase';
import { collection, getDocs, doc, getDoc,where, collectionGroup } from "firebase/firestore";
import Calendar from "@/components/Calendar/Calendar";
 

export default function Eventos() {
  const [name, setName] = useState("");
  const [events, setEvents] = useState([]);
  const [eventSelected, setEventSelected] = useState([]);
  const event=useRef(null)

  const fetchPlayers = async () => {
    try {
      let auxPlayers=[]
      const querySnapshot = await getDocs(
        collection(db, 'events'),
        where('available', '==', true)
      );
  
      querySnapshot.forEach(async (playerDoc) => {
        let playerData = playerDoc.data();
        playerData.id=playerDoc.id
  
  
  
        if(playerData.available){
          auxPlayers.push(playerData)
        }
    
       
      });
  
      setEvents(auxPlayers)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
  
    fetchPlayers();
  
  }, []);
  
  const data = {
    "DUPR": {
      name: "Los DUPR Nationals / Diciembre 2023",
      text: "Son un circuito alrededor de los países hispanohablantes que busca profesionalizar el deporte fuera de los Estados Unidos, brindando una experiencia única para jugadores amateur y profesionales por igual. A su vez, Dynamic Universal Pickleball Rating (DUPR), es el sistema de clasificación más preciso y único a nivel global en el Pickleball. Todos los jugadores, sin importar su edad, género, ubicación o habilidad, son clasificados en la misma escala entre 2.0 y 8.0 basado en sus resultados de partidos. Puerto Rico: Fue un emocionante encuentro de 4 días llenos de profesionalismo, diversión y deporte.  Con más de 200 participantes, jugaron 15 categorías desde principiantes hasta profesionales que impulsaron su deporte al siguiente nivel. Un torneo que marcó un antes y un después en el Pickleball en Puerto Rico.",
      photos: [{ source: MiamiEvent1.src, URL: '' },{ source: MiamiEvent2.src, URL: '' },{ source: MiamiEvent3.src, URL: 'https://mydupr.com/' },{ source: MiamiEvent4.src, URL: '' },{ source: MiamiEvent5.src, URL: '' },{ source: MiamiEvent6.src, URL: '' },{ source: MiamiEvent7.src, URL: '' },{ source: MiamiEvent8.src, URL: '' },{ source: MiamiEvent9.src, URL: '' },],
      banner: "/images/pr-event/1.webp"
    },
    "MARLINS": {
      name: "MIAMI MARLINS PICKLEBALL DAY",
      text: "La Cocina Pickleball fue el patrocinador oficial del Día de Pickleball de los Miami Marlins en el Loan Depot Park. Los atletas de La Cocina ofrecieron clínicas a todos los participantes del evento, y el torneo de pickleball culminó con un partido de exhibición entre Jhonnatan Medina Álvarez y el jugador estadounidense Christian Alshon. Al finalizar el evento de pickleball, el CEO de la compañía, acompañado por los atletas de La Cocina, Jhonnatan Medina Álvarez y Judit Castillo, estuvieron en el terreno de juego cantando el himno de los Estados Unidos junto a otros jugadores profesionales de pickleball. Durante el juego de béisbol, el equipo de La Cocina Pickleball y sus invitados disfrutaron del partido en una sala VIP, viendo un emocionante encuentro entre los Phillies de Filadelfia y los Miami Marlins.",
      photos: [{ source: MiamiEvent1.src, URL: '' },{ source: MiamiEvent2.src, URL: '' },{ source: MiamiEvent3.src, URL: 'https://mydupr.com/' },{ source: MiamiEvent4.src, URL: '' },{ source: MiamiEvent5.src, URL: '' },{ source: MiamiEvent6.src, URL: '' },{ source: MiamiEvent7.src, URL: '' },{ source: MiamiEvent8.src, URL: '' },{ source: MiamiEvent9.src, URL: '' },],
      banner: MiamiEvent1.src 
    }
  }
  
  const changeEvent = (event) => {
    setName(event.name);
    setEventSelected(event);
    event.current?.scrollIntoView({ behavior: 'smooth' });

  }

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const handleImageLoad = () => {
  const images = document.querySelectorAll('img');
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
  return (
      <ReactLenis root options={{ lerp: 0.1 }}>
       {/* <div className={!imagesLoaded ? "imageLoader" :"imageLoader notVisible"}>  <img className="spinner" src="/logo.webp"/>
      
         </div> */}
        <div className={styles.main}>
        <div className={styles.grafitti}>
      <img  src="/images/grafitti-blue.png"  />
      </div>
        <div className="h-screen relative" >
          <Menu/>
          <div className="min-h-screen">
          {/* <h1 
          className="header-page"
          >
            EVENTOS
          </h1>
          <img onLoad={handleImageLoad} className="arrow-header" src="./images/arrow-down.webp" />
                <img onLoad={handleImageLoad} 
            className="grafitti-event" 
            src="./images/grafitti-events.webp" 
          />

          <div className={ `flex flex-row w-full h-2/3 absolute ${styles.eventos}`} >
            <EventSelector onPress={changeEvent} events={events}/>
          </div> */}
          <Calendar/>
          </div>
      
        </div>
        
     
        {/* {name != "" && (
        <>
        <div className="min-h-screen relative" ref={event}>
        <h1 className="secondary-header">
            {eventSelected.name}
          </h1>
          <div className={`flex flex-row w-12/12 h-2/3 absolute top-38 right-0 justify-between pr-5 ${styles.eventoContent}`}>
            <div className={`w-12/12 object-cover ${styles.eventoImage}`}>
              <Parallax speed={1} className="self-start object-cover">
                <img onLoad={handleImageLoad}
                  src={eventSelected.banner}
                  className="object-cover min-w-full h-[70vh] ml-5"
                />
              </Parallax>
            </div>
            <Parallax speed={-2} className="self-end ">
              <p className={`uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg ${styles.eventoContentText} `}>
                {eventSelected.description}
              </p>
            </Parallax>
          </div>
        </div>
        <PhotoGallery width={window.innerWidth}logos={eventSelected.images}/>
        </>)
        } */}
        <ContactUs color={'blue'} zIndex={'bottom'} footer={true}/>
      <Footer position={true}/>
        </div>
      </ReactLenis>
 
  );
}