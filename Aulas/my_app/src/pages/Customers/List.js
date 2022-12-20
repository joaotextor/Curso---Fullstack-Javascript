import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'

import CustomerCard from '../../components/CustomerCard'

export default function Customers() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(response => {
                console.log(response)

                //To avoid a new fetch to the API to get the new customers list, we can update the original array by filtering it, removing the recently removed customer

                setCustomers(customers.filter(customer => customer.id !== id ))
            })
    }

    return (
        <Grid container spacing={2} sx={{paddingTop: 5}}>
        {
            customers.map(item => (

                    <Grid item xs={6} sm={5} md={4} lg={3}>
                        <CustomerCard
                            id={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            onRemoveCustomer={handleRemoveCustomer}
                        />
                    </Grid>
            ))
        }
        </Grid>
    )
}