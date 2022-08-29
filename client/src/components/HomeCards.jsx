import React from "react";
import { Link } from 'react-router-dom';
import style from '../styles/HomeCards.css';

export default function HomeCard({ id, image, name, temperament, weight }) {
    
    if(!image) {image = "https://assets.stickpng.com/images/5ae967896554160a79be9f6a.png";}
    
    return (

        <Link to={`/dogs/${id}`}>
            <div id='card' style={style}>

                <img id='img' referrerPolicy="no-referrer" src={image} alt='Img' />


                <h1>{name}</h1>

                <p>{weight}</p>
                <p>{temperament}</p>

            </div>
        </Link>
    )
};