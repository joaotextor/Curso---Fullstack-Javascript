import React from 'react'

export default function Loading({visible}) {
    return (
        <div>
            <h3>{visible ? 'Loading...': ''}</h3>
        </div>
    )
}