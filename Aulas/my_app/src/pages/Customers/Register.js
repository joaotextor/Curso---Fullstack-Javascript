import { useState } from 'react'
import axios from 'axios'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import Toasty from '../../components/Toasty'

import CircularProgress from '@mui/material/CircularProgress'

import { red } from '@mui/material/colors'

const classes = {
    inputs: {
        marginBlock: '10px'
    }
}

export default function Register() {


    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
            helperText: ''
        },
        job: {
            value: '',
            error: false,
            helperText: ''
        }
    })

    const [toastyOpen, setToastyOpen] = useState({
        open: false,
        message: '',
        severity: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value
            }
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)
        let hasError = false
        const newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Fill the name field.'
            }
        }

        if (!form.job.value) {
            hasError = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Fill the job field.'
            }
        }

        if (hasError) {
            return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value
        })
            .then(response => {
                setIsLoading(false)
                setToastyOpen({
                    ...toastyOpen,
                    open: true,
                    message: 'Cadastro realizado com sucesso!',
                    severity: 'success'
                })
            })
    }

    return (
        <>
            <div>
                <TextField
                error={form.name.error}
                helperText={form.name.helperText}
                id="customer-name"
                name="name" 
                label="Enter customer name" variant="standard" 
                sx={classes.inputs} 
                value={form.name.value} 
                onChange={handleInputChange}
                />
            </div>
            <div>
                <TextField 
                error={form.job.error}
                helperText={form.job.helperText}
                id="customer-job" 
                name="job" 
                label="Enter customer job" variant="standard" 
                sx={classes.inputs} 
                value={form.job.value} 
                onChange={handleInputChange}
                />
            </div>
            <div>
                <Button variant="contained" sx={classes.inputs} onClick={handleRegisterButton} disabled={isLoading}>
                    { isLoading ? <CircularProgress size={24} sx={{color: red[400]}}
                    /> : 'Register'}
                    </Button>
            </div>
        <Toasty severity={toastyOpen.severity} message={toastyOpen.message} open={toastyOpen.open} />
        </>
    )
}