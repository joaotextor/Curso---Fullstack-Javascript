import React, { useState, useEffect } from 'react'

export default function Users() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json
                ())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1>Users</h1>
            {
                loading ? <h2>Loading...</h2> : null
            }
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