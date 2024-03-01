"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./eventos.module.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, addMonths, subMonths, getYear } from 'date-fns';
import { Parallax } from "@/components/Parallax";
import EventSelector from "@/components/EventSelector";
import { ContactUs } from "@/components/ContactUs";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import MiamiEvent1 from "@/public/images/miami-event/miami-event-1.webp";
import MiamiEvent2 from "@/public/images/miami-event/miami-event-2.webp";
import MiamiEvent3 from "@/public/images/miami-event/miami-event-3.webp";
import MiamiEvent4 from "@/public/images/miami-event/miami-event-4.webp";
import MiamiEvent5 from "@/public/images/miami-event/miami-event-5.webp";
import MiamiEvent6 from "@/public/images/miami-event/miami-event-6.webp";
import MiamiEvent7 from "@/public/images/miami-event/miami-event-7.webp";
import MiamiEvent8 from "@/public/images/miami-event/miami-event-8.webp";
import MiamiEvent9 from "@/public/images/miami-event/miami-event-9.webp";
import Menu from "@/components/Menu";
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "@/components/Footer";
import { db, storage } from "../../firebase/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  collectionGroup,
} from "firebase/firestore";
import Calendar from "@/components/Calendar/Calendar";
import { Reveal } from "@/components/Reveal";

export default function Eventos() {
  const [name, setName] = useState("");
  const [events, setEvents] = useState([]);
  const [eventsByDate, setEventsByDate] = useState([]);
  const [upcoming, setUpcoming] = useState(true);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [eventsFiltered, setEventsFiltered] = useState([]);
  const [eventSelected, setEventSelected] = useState([]);
  const event = useRef(null);
  const event2 = useRef(null);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [settings] = useState({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    arrows:false
});
  const fetchEventsByDate = async () => {
    try {
      let auxPlayers = [];
      const querySnapshot = await getDocs(
        collection(db, "event_by_date"),
        where("available", "==", true)
      );

      querySnapshot.forEach(async (playerDoc) => {
        let playerData = playerDoc.data();
        playerData.id = playerDoc.id;

        if (playerData.available) {
          auxPlayers.push(playerData);
        }
      });
      console.log(auxPlayers);
      if(auxPlayers.length>0){
        setPages(Math.ceil(auxPlayers.length/5))
      }
      setEventsByDate(auxPlayers);
      if(auxPlayers.length>1){
      let sortedProducts = auxPlayers.sort(
        (p1, p2) => (new Date(p1.date_of_event.toDate()) > new Date(p2.date_of_event.toDate())) ? 1 : (new Date(p1.date_of_event.toDate()) < new Date(p2.date_of_event.toDate())) ? -1 : 0);

      sortedProducts= sortedProducts.filter((event)=>{return new Date(event.date_of_event.toDate()) >= new Date() })
      setEventsFiltered(sortedProducts)
      }else{
        let sortedProducts= auxPlayers.filter((event)=>{return new Date(event.date_of_event.toDate()) >= new Date() })
        setEventsFiltered(sortedProducts)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error("Error fetching data:", error);
    }
  };
  const fetchPlayers = async () => {
    try {
      let auxPlayers = [];
      const querySnapshot = await getDocs(
        collection(db, "events"),
        where("available", "==", true)
      );

      querySnapshot.forEach(async (playerDoc) => {
        let playerData = playerDoc.data();
        playerData.id = playerDoc.id;

        if (playerData.available) {
          auxPlayers.push(playerData);
        }
      });

      if(auxPlayers.length>0){
        setName(auxPlayers[0].name);
        setEventSelected(auxPlayers[0]);
  
      }
      setEvents(auxPlayers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchEventsByDate();
    fetchPlayers();
  }, []);

  const data = {
    DUPR: {
      name: "Los DUPR Nationals / Diciembre 2023",
      text: "Son un circuito alrededor de los países hispanohablantes que busca profesionalizar el deporte fuera de los Estados Unidos, brindando una experiencia única para jugadores amateur y profesionales por igual. A su vez, Dynamic Universal Pickleball Rating (DUPR), es el sistema de clasificación más preciso y único a nivel global en el Pickleball. Todos los jugadores, sin importar su edad, género, ubicación o habilidad, son clasificados en la misma escala entre 2.0 y 8.0 basado en sus resultados de partidos. Puerto Rico: Fue un emocionante encuentro de 4 días llenos de profesionalismo, diversión y deporte.  Con más de 200 participantes, jugaron 15 categorías desde principiantes hasta profesionales que impulsaron su deporte al siguiente nivel. Un torneo que marcó un antes y un después en el Pickleball en Puerto Rico.",
      photos: [
        { source: MiamiEvent1.src, URL: "" },
        { source: MiamiEvent2.src, URL: "" },
        { source: MiamiEvent3.src, URL: "https://mydupr.com/" },
        { source: MiamiEvent4.src, URL: "" },
        { source: MiamiEvent5.src, URL: "" },
        { source: MiamiEvent6.src, URL: "" },
        { source: MiamiEvent7.src, URL: "" },
        { source: MiamiEvent8.src, URL: "" },
        { source: MiamiEvent9.src, URL: "" },
      ],
      banner: "/images/pr-event/1.webp",
    },
    MARLINS: {
      name: "MIAMI MARLINS PICKLEBALL DAY",
      text: "La Cocina Pickleball fue el patrocinador oficial del Día de Pickleball de los Miami Marlins en el Loan Depot Park. Los atletas de La Cocina ofrecieron clínicas a todos los participantes del evento, y el torneo de pickleball culminó con un partido de exhibición entre Jhonnatan Medina Álvarez y el jugador estadounidense Christian Alshon. Al finalizar el evento de pickleball, el CEO de la compañía, acompañado por los atletas de La Cocina, Jhonnatan Medina Álvarez y Judit Castillo, estuvieron en el terreno de juego cantando el himno de los Estados Unidos junto a otros jugadores profesionales de pickleball. Durante el juego de béisbol, el equipo de La Cocina Pickleball y sus invitados disfrutaron del partido en una sala VIP, viendo un emocionante encuentro entre los Phillies de Filadelfia y los Miami Marlins.",
      photos: [
        { source: MiamiEvent1.src, URL: "" },
        { source: MiamiEvent2.src, URL: "" },
        { source: MiamiEvent3.src, URL: "https://mydupr.com/" },
        { source: MiamiEvent4.src, URL: "" },
        { source: MiamiEvent5.src, URL: "" },
        { source: MiamiEvent6.src, URL: "" },
        { source: MiamiEvent7.src, URL: "" },
        { source: MiamiEvent8.src, URL: "" },
        { source: MiamiEvent9.src, URL: "" },
      ],
      banner: MiamiEvent1.src,
    },
  };

  const changeEvent = (eventaux) => {
    setName(eventaux.name);
    setEventSelected(eventaux);
    event.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const handleImageLoad = () => {
    const images = document.querySelectorAll("img");
    const allImagesLoaded = Array.from(images).every((image) => image.complete);

    if (allImagesLoaded) {
      setImagesLoaded(true);
    }
  };
  useEffect(() => {
    const images = document.querySelectorAll("img");

    images.forEach((image) => {
      const allImagesLoaded = Array.from(images).every(
        (image) => image.complete
      );

      if (allImagesLoaded) {
        setImagesLoaded(true);
      }
      image.addEventListener("load", handleImageLoad);
    });
  }, []); // Run this effect only once, when the component mounts

  const getEventName = (event) => {
    try {
  
    

      return event ? event.name : "";
    
    
    } catch (error) {
      // console.error('Invalid date:', date);
      return '';
    }
  };

  useEffect(() => {
   changeUpcoming()
  }, [upcoming]); // Run this effect only once, when the component mounts

  const changeUpcoming=()=>{
    let aux=eventsByDate;
    
    if(upcoming){

      aux= aux.filter((event)=>{return new Date(event.date_of_event.toDate()) >= new Date() })
    }else{
      aux= aux.filter((event)=>{return new Date(event.date_of_event.toDate()) < new Date() })
    }
    if(aux.length>1){
      if(upcoming){
      let final = aux.sort(
        (p1, p2) => (new Date(p1.date_of_event.toDate()) > new Date(p2.date_of_event.toDate())) ? 1 : (new Date(p1.date_of_event.toDate()) < new Date(p2.date_of_event.toDate())) ? -1 : 0);
        setPage(0)
        setPages(Math.ceil(final.length/5))
        setEventsFiltered(final)
      }else{
        let final = aux.sort(
          (p1, p2) => (new Date(p1.date_of_event.toDate()) < new Date(p2.date_of_event.toDate())) ? 1 : (new Date(p1.date_of_event.toDate()) > new Date(p2.date_of_event.toDate())) ? -1 : 0);
          setPage(0)
          setPages(Math.ceil(final.length/5))
          setEventsFiltered(final)
   
      }
  
      }else{
        let final=aux
        setPage(0)
        setPages(Math.ceil(final.length/5))
        setEventsFiltered(final)
      }

 

  }
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      <div className={loading ? "imageLoader" :"imageLoader notVisible"}>  <img className="spinner" src="/logo.webp"/>
      
         </div>
      <div className={styles.main}>
        <div className={styles.grafitti}>
          <img src="/images/grafitti-blue.png" />
        </div>
        <div className="min-h-screen relative">
          <Menu />
          <div className="min-h-screen">
            <h1 className="header-page2">EVENTOS</h1>
            <div
              className={`flex flex-row w-full h-2/3 absolute ${styles.eventos}`}
            >
              <EventSelector onPress={changeEvent} events={events} eventSelected={eventSelected}/>
            </div>
  
          </div>
          <div ref={event}></div>
          {name != "" && (
            <>
              <div className="min-h-screen relative">
                <h1 className="secondary-header">{eventSelected.name}</h1>
                <div
                  className={`flex flex-row w-12/12 h-2/3 absolute top-38 right-0 justify-between pr-5 ${styles.eventoContent}`}
                >
                  <div className={`w-12/12 object-cover ${styles.eventoImage}`}>
                    <Parallax speed={1} className="self-start object-cover">
                      <img
                        onLoad={handleImageLoad}
                        src={eventSelected.banner}
                        className="object-cover min-w-full h-[70vh] ml-5"
                      />
                    </Parallax>
                  </div>
                  <Parallax speed={-2} className="self-end ">
                    <p
                      className={`uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg ${styles.eventoContentText} `}
                    >
                      {eventSelected.description}
                    </p>
                  </Parallax>
                </div>
              </div>
              <PhotoGallery width={windowWidth} logos={eventSelected.images} />
            </>
          )}

          <div className="min-h-screen relative">
          <Calendar events={eventsByDate} mainEvents={events} width={windowWidth} />
          </div>
          <div ref={event2}></div>
          <div className={`min-h-screen relative ${styles.agenda}`}>
        
            <div className={styles.filter}>
              <h4 className={!upcoming && styles.selected} onClick={()=>{setUpcoming(false)}}>Pasados</h4>
              <h4 className={upcoming && styles.selected} onClick={()=>{setUpcoming(true)}}>Próximos</h4>
            </div>
   
            <div className={styles.eventsContainer}>
              {eventsFiltered.map((event,index)=>{
                if(index >= page && index<page+5){
                return    <Reveal>
                <div className={styles.eventContainer}>
                {/* <img src={event.banner} /> */}
                <div className={styles.imageCarousel}>
       {event.images.length>0 ?
                <Slider {...settings}>
                    {event.images.map((logo, index) => (
                        <div key={index} className="container-gallery">
                            <a href={logo.URL || ""} target="_blank" rel="noopener noreferrer">
                                <img src={ logo} alt='logo' />
                            </a>
                        </div>
                    ))}
                </Slider>
                : 
                <img src={ event.banner} alt='logo' />}
        
                </div>
                <div className={styles.content}>
                  <h2>{getEventName(event)}</h2>
                  <h3>{event.description}</h3>
                </div>

<h5>{format(event.date_of_event.toDate(), 'dd/MM/yyyy')}<br/>{event.date_of_event.toDate().toLocaleString('en-US', { hour: 'numeric',minute: 'numeric', hour12: true }) == "12:00 AM"? "":event.date_of_event.toDate().toLocaleString('en-US', { hour: 'numeric',minute: 'numeric', hour12: true })}</h5>
              </div>
              </Reveal>}
              })}
           

            </div>
            <div className={styles.pages}>
              {page > 0 &&
              <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} onClick={()=>{setPage(page-1);     event2.current?.scrollIntoView({ behavior: "smooth" });}}/>}
              {pages >0 &&
            Array.from({ length: pages }, (_, index) => (
  <h2 key={index} onClick={()=>{setPage(index);     event2.current?.scrollIntoView({ behavior: "smooth" });}} className={index==page && styles.selected}>
    {index+1}
  </h2>
))
}
{page < pages-1 &&
<FontAwesomeIcon icon={faArrowRight} className={styles.arrow} onClick={()=>{setPage(page+1);     event2.current?.scrollIntoView({ behavior: "smooth" });}}/>}
            </div>
            </div>

      
        </div>

        <ContactUs color={"blue"} transparent={"transparent"} zIndex={"bottom"}  />
   
      </div>
      {/* <Footer position={true} /> */}
    </ReactLenis>
  );
}
