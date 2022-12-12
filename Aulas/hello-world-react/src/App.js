import React from 'react'
import Header from './Header'
import Content from './Content'
import Card from './Card'
import Cards from './Cards'

import reactjs from './images/reactjs.png'
import nodejs from './images/nodejs.png'
import nextjs from './images/nextjs.png'

/*

COMPONENTES - Criando e Usando

- Import React
- Função que retorna JSX
    - Sempre tem que ter um elemento pai
    - React Fragment <> e </
- Exportar Função
- Para usar o componente:
    - Importar
    - Usar como tag, exemplo <App /> | <App> </App>
    - Componentes podem receber propriedades, exemplo: <Header titulo="texto"/>
*/

function App() {
    return (
        <>
            <Header titulo="Hello World!" subtitulo="Olá" />
            <Content titulo="Bem Vindo">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>   

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>   
                <Cards>

                    <Card 
                        imagem={reactjs}
                        titulo="React"
                        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                    <Card 
                        imagem={nodejs}
                        titulo="Node"
                        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                    <Card 
                        imagem={nextjs}
                        titulo="Next"
                        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                
                </Cards>
                
            </Content>
        </>
    )
}

export default App