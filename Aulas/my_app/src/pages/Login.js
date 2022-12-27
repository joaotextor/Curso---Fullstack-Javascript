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
    return (
        <>
            <Typography variant="h3">Restricted Access</Typography>

            <Wrapper>
                <TextField
                    label="Insert your email address"
                    name="email"
                />
            </Wrapper>

            <Wrapper>
                <TextField
                    label="Insert your password"
                    name="password"
                />
            </Wrapper>

            <Wrapper>
                <Button variant="contained" color="primary">Login</Button>
            </Wrapper>
        </>
    )
}