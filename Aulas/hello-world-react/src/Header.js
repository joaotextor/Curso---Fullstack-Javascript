import React from 'react'
import './Header.css'

function Header({ titulo, subtitulo }) {
    /* Também funciona: 
    function Header(props) {
        const {
            titulo
        } = props
    }
    */
    return (
        // No React, se usa className em vez de class
        <header className="header">
             {/* Interpolação */}
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </header>
    )
}

export default Header