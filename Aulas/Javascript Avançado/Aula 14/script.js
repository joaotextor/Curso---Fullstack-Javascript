/*

* ASYNC / AWAIT

*/

function transformarEmJson(response) {
     return response.json()
     //* O return passa o .json para o próximo .then. 
     //* O .json é uma Promise. Sem o return, teria que ter o .then
}

function montarHtml(dados) {
     console.log(dados)
}

function exibirErro() {
     console.log("Página não encontrada")
}

// const configs = {
//      method: 'POST', //! default is GET
//      headers: {}
// }

const button = document.querySelector('#callbackButton')
button.onclick = botaoCique

async function botaoCique() { //Indica que nesta função há uma Promise (o fetch), e o await serve para aguardar esse código ser executado (tornar o fetch em síncrono)
     const dados = await fetch("https://jsonplaceholder.typicode.com/photos"/*, configs */)
          .then(transformarEmJson)
          .catch(exibirErro)

     console.log(dados) //*Só vai executar o console.log após terminar de executar o fetch (que, lembrando, é uma função assíncrona)
}
     