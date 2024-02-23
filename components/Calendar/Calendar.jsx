import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, addMonths, subMonths, getYear } from 'date-fns';
import styles from './calendar.module.css';
import { db, storage } from '../../firebase/firebase';
import { collection, getDocs, doc, getDoc,where, collectionGroup } from "firebase/firestore";
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Reveal } from '../Reveal';
const Calendar = ({ events,mainEvents }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: startOfMonthDate, end: endOfMonthDate });

  const weekdays = window.innerWidth > 500 ? ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'] : ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const getEventImage = (date) => {
    try {
      const eventDate = new Date(date); // Convert timestamp to milliseconds

      const event = events.find((event) => format(event.date_of_event.toDate(), 'dd/MM/yyyy') === format(eventDate, 'dd/MM/yyyy'));
 
      return event ? event.banner : null;
    
    
    } catch (error) {
      console.error('Invalid date:', date);
      return null;
    }
  };

  const getEventName = (date) => {
    try {
      const eventDate = new Date(date); // Convert timestamp to milliseconds

      const event = events.find((event) => format(event.date_of_event.toDate(), 'dd/MM/yyyy') === format(eventDate, 'dd/MM/yyyy'));

      const mainEvent = mainEvents.find((event2) => event.event.id==event2.id);

      return event ? mainEvent.name+" - "+ event.name : "";
    
    
    } catch (error) {
      console.error('Invalid date:', date);
      return null;
    }
  };

  return (
    <Reveal>
    <div className={styles.calendar}>
     
      <div className={styles.navigation}>
        <span>{months[getMonth(currentDate)]} {getYear(currentDate)}</span>
        <div className={styles.arrows}>
        <FontAwesomeIcon className={styles.arrow} icon={faArrowLeft} onClick={()=>{goToPreviousMonth()}}/>
        <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} onClick={()=>{goToNextMonth()}} />
        </div>
      </div>
 
      <div className={styles.weekdays}>
        {weekdays.map((weekday) => (
            <Reveal>
          <div className={styles.weekday} key={weekday}>{weekday}</div></Reveal>
        ))}
      </div>
      <div className={styles.days}>
        {daysInMonth.map((day) => (
          <Reveal>
          <div className={styles.day} key={day}>
            {getEventImage(day) && (
              <img src={getEventImage(day)} alt="Event" />
            )}
            <h3>{getEventName(day)}</h3>
            <div className={styles.overlay}></div>
            <div className={styles.date}>{format(day, 'd')}</div>
          </div>
          </Reveal>
        ))}
      </div>
    </div>
    </Reveal>
   
  );
};

export default Calendar;