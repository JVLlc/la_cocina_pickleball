import React from 'react';

const EventSelector = ({ onPress }) => {

    const changeStyles = (e) => {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";

    }

    const changeStylesClose = (e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "white";

    }

    return (
        <div style={{ width: "55%" }}>
            <button style={{ width: "100%", border: "none", color: "white" }} onMouseEnter={(e) => changeStyles(e)} onMouseLeave={(e) => changeStylesClose(e)} onClick={ () => onPress("DUPR")}>DUPR NATIONALS</button>
            <hr />
            <button style={{ width: "100%", border: "none", color: "white" }} onMouseEnter={(e) => changeStyles(e)} onMouseLeave={(e) => changeStylesClose(e)} onClick={ () => onPress("MARLINS")}>MIAMI MARLINS PICKLEBALL DAY</button>
        </div>
    );
};

export default EventSelector;
