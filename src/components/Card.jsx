import React from 'react';
import {string} from "prop-types";
import "./Card.css";

const Card = ({lang, url , fcolor, scolor}) => {
    return (
        <div 
            className="card" 
            style={{
                //Los tempalte strings son las lineas esas de derecha a izq `` (Alt + [}]`])
                //Tambien la concatenacionde toda la vida ("" + "") 
                background: `linear-gradient(to left, ${fcolor}, ${scolor})`,
            }}
        >
            <img src={url} alt={lang} />
            <h3>{lang}</h3>
        </div>
    )
}

Card.propTypes = {
    lang: string,
    url: string,
    fcolor: string,
    scolor: string,        
}

export default Card;
