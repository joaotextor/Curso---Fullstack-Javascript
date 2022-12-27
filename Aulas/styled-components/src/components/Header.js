import styled from 'styled-components'

const Caixa = styled.div`
    background-color: red;
    color: green;
    width: 200px;
    aspect-ratio: 1;
`
const TitleH1 = styled.h1`
    margin: 0;
`


export default function Header() {
    return (
        <>
            <Caixa>
                <TitleH1>Caixa</TitleH1>
            </Caixa>
        </>
    )
}