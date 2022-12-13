import React, { useState, useEffect } from 'react'

import Loading from '../components/Loading'

export default function Users() {
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json
                ())
            .then(data => {
                setUsers(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <Loading visible={isLoading} />

            <table style={{margin: '10px'}}>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Company</th>
                </tr>
            {
                users.map(user => {
                    return (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.street}, {user.address.suite}, {user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    )
                })
            }
            </table>
        </>
    )
}