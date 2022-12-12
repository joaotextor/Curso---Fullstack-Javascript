import React from 'react'
import './Card.css'

const Card = ({titulo, texto, imagem}) => {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p>{texto}</p>
            <img src={imagem} alt="card"/>
        </div>
    )
}

export default Card