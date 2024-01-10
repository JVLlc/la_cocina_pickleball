import React from 'react';
import styles from "./eventSelector.module.css";

const EventSelector = ({ onPress }) => {



    return (
        <div style={{ width: "100%" }}>
            <div className={styles.eventosRow}>
            
            <button  className={styles.eventoItem}  onClick={ () => onPress("DUPR")}>DUPR NATIONALS</button>
            <img  src='images/pr-event/1.webp'/>
            </div>
            <div className={styles.eventosRow}>
            
                
            <button className={styles.eventoItem} onClick={ () => onPress("MARLINS")}>MIAMI MARLINS PICKLEBALL DAY</button>
            <img  src='images/miami-event/miami-event-1.webp'/>
            </div>

     
        </div>
    );
};

export default EventSelector;
