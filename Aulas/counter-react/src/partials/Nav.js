import React from 'react'

export default function Nav({pages, onChangePage}) {
    const pageNames = Object.keys(pages)

    return (
        <nav>
            { 
      
                pageNames.map(page => 
                    <button onClick={() =>          onChangePage(page)}>{pages[page].text}</button>
                )

            }
        </nav>
    )
}