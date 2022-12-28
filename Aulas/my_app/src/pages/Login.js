import { useState } from 'react'
import { 
    useNavigate
  } from 'react-router-dom'

import { 
    Typography,
    TextField,
    Button,
} from "@mui/material"

import { styled } from "@mui/material/styles"

import useAuth from '../state/auth'


const Wrapper = styled('div')`
    margin-block: 15px;
`

export default function Login() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const { user, setUser } = useAuth()

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleFormSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            const response = {
                success: true,
                user: {
                    email: form.email,
                }
            }

            setUser({
                logged: response.success,
                email: form.email
            })

            navigate('/')

        }, 3000)
    }

    return (
        <>
            <Typography variant="h3">Restricted Access</Typography>

            <Wrapper>
                <TextField
                    variant="standard"
                    type="email"
                    label="Insert your email"
                    name="email"
                    onChange={handleInputChange}
                />
            </Wrapper>

            <Wrapper>
                <TextField
                    variant="standard"
                    type="password"
                    label="Insert your password"
                    name="password"
                    onChange={handleInputChange}
                />
            </Wrapper>

            <Wrapper>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                    {
                        isLoading ? 'Loading...' : 'Login'
                    }
                </Button>
            </Wrapper>
        </>
    )
}