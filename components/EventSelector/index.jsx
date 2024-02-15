import React from 'react';
import styles from "./eventSelector.module.css";

const EventSelector = ({ onPress, events }) => {

    console.log("VAcila ", events);

    return (
        <div style={{ width: "100%" }}>
            {events.map((data, index) => (
                <div className={styles.eventosRow} key={index}>
                    <button className={styles.eventoItem} onClick={ () => onPress(data)}>{data.name}</button>
                    <img src={data.banner} />
                </div>
            )
            )}
        </div>
    );
};

export default EventSelector;
