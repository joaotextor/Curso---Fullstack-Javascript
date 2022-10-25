/*

* FETCH API - Substituiu o XMLHttpRequest

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
button.onclick = () => 
     fetch("https://jsonplaceholder.typicode.com/photos"/*, configs */)
     .then(transformarEmJson)
     .then(montarHtml)
     .catch(exibirErro)
