import Header from '../partials/Header/Header'

import Container from '@mui/material/Container'

export default function Default({ children }) {
    return (
        <>
            <Header />
            <Container sx={{
                padding: '15px 0'
                }}>                
                { children }
            </Container>
        </>
    )
}