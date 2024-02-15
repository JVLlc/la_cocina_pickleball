import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, addMonths, subMonths } from 'date-fns';
import styles from './calendar.module.css';

const Calendar = () => {
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
  
  const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className={styles.calendar}>
          <div className={styles.navigation}>
        {/* <button onClick={goToPreviousMonth}>Previous</button> */}
        <span>{months[getMonth(currentDate)]}</span>
        {/* <button onClick={goToNextMonth}>Next</button> */}
      </div>
      <div className={styles.weekdays}>
        {weekdays.map((weekday) => (
          <div className={styles.weekday} key={weekday}>{weekday}</div>
        ))}
      </div>
      
  
      
      <div className={styles.days}>
        {daysInMonth.map((day) => (
          <div className={styles.day} key={day}>
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;