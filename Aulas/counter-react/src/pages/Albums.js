import React, { useState, useEffect } from 'react'

import Loading from '../components/Loading'

export default function Album() {
    const [isLoading, setIsLoading] = useState(false)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json
                ())
            .then(data => {
                setAlbums(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <Loading visible={isLoading} />

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