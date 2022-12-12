import React, { useState, useEffect } from 'react'

export default function Album() {
    const [loading, setLoading] = useState(false)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json
                ())
            .then(data => {
                setAlbums(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1>Albums</h1>
            {
                loading ? <h2>Loading...</h2> : null
            }
            {
                albums.map(album => {
                    return (
                        <div>
                            <span>{album.title} - id: {album.id}</span>
                        </div>
                    )
                })
            }
        </>
    )
}