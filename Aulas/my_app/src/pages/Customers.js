import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'

import CustomerCard from '../components/CustomerCard'

export default function Home() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    return (
        <Grid container spacing={2} sx={{paddingTop: 5}}>
        {
            customers.map(item => (

                    <Grid item xs={6} sm={5} md={4} lg={3}>
                        <CustomerCard
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                        />
                    </Grid>
            ))
        }
        </Grid>
    )
}