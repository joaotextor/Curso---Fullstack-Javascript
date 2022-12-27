import { useState } from 'react'
import { 
    Typography,
    TextField,
    Button,
} from "@mui/material"

import { styled } from "@mui/material/styles"


const Wrapper = styled('div')`
    margin-block: 15px;
`

export default function Login() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleFormSubmit = () => {
        console.log(form)
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
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>Login</Button>
            </Wrapper>
        </>
    )
}