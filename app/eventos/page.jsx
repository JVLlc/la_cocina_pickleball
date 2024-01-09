"use client";
import React, { useState,useRef } from "react";
import styles from "./eventos.module.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import { HomeCard } from "@/components/HomeCard";
import { Parallax } from "@/components/Parallax";
import EventSelector from "@/components/EventSelector";
import { ContactUs } from "@/components/ContactUs";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import MiamiEvent1 from "@/public/images/miami-event/miami-event-1.png"
import MiamiEvent2 from "@/public/images/miami-event/miami-event-2.png"
import MiamiEvent3 from "@/public/images/miami-event/miami-event-3.png"
import MiamiEvent4 from "@/public/images/miami-event/miami-event-4.png"
import MiamiEvent5 from "@/public/images/miami-event/miami-event-5.png"
import MiamiEvent6 from "@/public/images/miami-event/miami-event-6.png"
import MiamiEvent7 from "@/public/images/miami-event/miami-event-7.png"
import MiamiEvent8 from "@/public/images/miami-event/miami-event-8.png"
import MiamiEvent9 from "@/public/images/miami-event/miami-event-9.png"
import PREvent1 from "@/public/images/pr-event/pr-event-1.png"
import Menu from "@/components/Menu";
 

export default function Eventos() {
  const [name, setName] = useState("DUPR");
  const event=useRef(null)

  console.log(MiamiEvent7);
  
  const data = {
    "DUPR": {
      name: "Los DUPR Nationals / Diciembre 2023",
      text: "Son un circuito alrededor de los países hispanohablantes que busca profesionalizar el deporte fuera de los Estados Unidos, brindando una experiencia única para jugadores amateur y profesionales por igual.\n A su vez, Dynamic Universal Pickleball Rating (DUPR), es el sistema de clasificación más preciso y único a nivel global en el Pickleball. Todos los jugadores, sin importar su edad, género, ubicación o habilidad, son clasificados en la misma escala entre 2.0 y 8.0 basado en sus resultados de partidos.\n\nPuerto Rico: Fue un emocionante encuentro de 4 días llenos de profesionalismo, diversión y deporte.  Con más de 200 participantes, jugaron 15 categorías desde principiantes hasta profesionales que impulsaron su deporte al siguiente nivel. Un torneo que marcó un antes y un después en el Pickleball en Puerto Rico.",
      photos: [{ source: MiamiEvent1.src, URL: '' },{ source: MiamiEvent2.src, URL: '' },{ source: MiamiEvent3.src, URL: 'https://mydupr.com/' },{ source: MiamiEvent4.src, URL: '' },{ source: MiamiEvent5.src, URL: '' },{ source: MiamiEvent6.src, URL: '' },{ source: MiamiEvent7.src, URL: '' },{ source: MiamiEvent8.src, URL: '' },{ source: MiamiEvent9.src, URL: '' },],
      banner: "https://www.elnuevodia.com/resizer/izy_o6a1j9pzA1PgcnCGHaaf0Yo=/1658x0/filters:quality(75):format(jpeg):focal(485x520:495x510)/cloudfront-us-east-1.images.arcpublishing.com/gfrmedia/GW5DGAGJXRAEDEWUUJPW2TWEJQ.jpg"
    },
    "MARLINS": {
      name: "MIAMI MARLINS PICKLEBALL DAY",
      text: "La Cocina Pickleball fue el patrocinador oficial del Día de Pickleball de los Miami Marlins en el Loan Depot Park. Los atletas de La Cocina ofrecieron clínicas a todos los participantes del evento, y el torneo de pickleball culminó con un partido de exhibición entre Jhonnatan Medina Álvarez y el jugador estadounidense Christian Alshon. Al finalizar el evento de pickleball, el CEO de la compañía, acompañado por los atletas de La Cocina, Jhonnatan Medina Álvarez y Judit Castillo, estuvieron en el terreno de juego cantando el himno de los Estados Unidos junto a otros jugadores profesionales de pickleball. Durante el juego de béisbol, el equipo de La Cocina Pickleball y sus invitados disfrutaron del partido en una sala VIP, viendo un emocionante encuentro entre los Phillies de Filadelfia y los Miami Marlins.",
      photos: [{ source: MiamiEvent1.src, URL: '' },{ source: MiamiEvent2.src, URL: '' },{ source: MiamiEvent3.src, URL: 'https://mydupr.com/' },{ source: MiamiEvent4.src, URL: '' },{ source: MiamiEvent5.src, URL: '' },{ source: MiamiEvent6.src, URL: '' },{ source: MiamiEvent7.src, URL: '' },{ source: MiamiEvent8.src, URL: '' },{ source: MiamiEvent9.src, URL: '' },],
      banner: MiamiEvent1.src 
    }
  }
  
  const changeEvent = (name) => {
    setName(name);
    event.current?.scrollIntoView({ behavior: 'smooth' });

  }

  console.log(data[name]);

  return (
      <ReactLenis root options={{ lerp: 0.1 }}>
        <div className={styles.main}>
        <div className="h-screen relative" >
          <Menu/>
          <div className="min-h-screen">
          <h1 
          className="header-page"
          >
            EVENTOS
          </h1>
          <img className="arrow-header" src="./images/arrow-down.png" />
                <img 
            className="grafitti-event" 
            src="./images/grafitti-events.png" 
          />

          <div className={ `flex flex-row w-full h-2/3 absolute ${styles.eventos}`} >
            <EventSelector onPress={changeEvent}/>
          </div>
          </div>
      
        </div>
        
     
        <div className="min-h-screen relative" ref={event}>
        <h1 className="secondary-header">
            {data[name].name}
          </h1>
          <div className={`flex flex-row w-12/12 h-2/3 absolute top-38 right-0 justify-between pr-5 ${styles.eventoContent}`}>
            <div className={`w-12/12 object-cover ${styles.eventoImage}`}>
              <Parallax speed={1} className="self-start object-cover">
                <img
                  src={data[name].banner}
                  className="object-cover min-w-full h-[70vh] ml-5"
                />
              </Parallax>
            </div>
            <Parallax speed={-2} className="self-end ">
              <p className={`uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg ${styles.eventoContentText} `}>
                {data[name].text}
              </p>
            </Parallax>
          </div>
        </div>
        <PhotoGallery logos={data[name].photos}/>
        <ContactUs color={'blue'}/>
        </div>
      </ReactLenis>
 
  );
}
