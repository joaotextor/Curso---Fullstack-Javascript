import React, { useState, useEffect } from 'react'
import './Counter.css'

export default function Counter() {
    const [contador, setContador] = useState(0)

    useEffect(() => {
    }, [contador])

    const handleOnClick = (operator) => {
        const newValue = operator === '-' ? contador - 1 : contador + 1
        
        setContador(newValue)
    }

    return (
        <div className="counter">
            <span>{contador}</span>
            <button onClick={() => handleOnClick('-')}>-</button >
            <button onClick={() => handleOnClick('+')}>+</button>
        </div>
    )
}