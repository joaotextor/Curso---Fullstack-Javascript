import Header from '../partials/Header/Header'

import Container from '@mui/material/Container'

import useAuth from '../state/auth'

export default function Default({ children }) {

    const { user, setUser } = useAuth()

    return (
        <>
            <Header user={user}/>
            <Container sx={{
                padding: '15px 0'
                }}>                
                { children }
            </Container>
        </>
    )
}