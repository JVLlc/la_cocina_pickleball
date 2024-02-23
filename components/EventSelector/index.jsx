import React from 'react';
import styles from "./eventSelector.module.css";

const EventSelector = ({ onPress, events,eventSelected }) => {


    return (
        <div style={{ width: "100%" }}>
            {events.map((data, index) => (
                <div className={styles.eventosRow} key={index}>
                    <button className={data.id == eventSelected.id ? `${styles.eventoItem} ${styles.selected}`:`${styles.eventoItem}`} onClick={ () => onPress(data)}>{data.name}</button>
                    <img className={data.id == eventSelected.id ? `${styles.selectedImage}`:``}  src={data.banner} />
                </div>
            )
            )}
        </div>
    );
};

export default EventSelector;
