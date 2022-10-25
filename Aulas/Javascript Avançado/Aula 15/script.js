/*

* Desestructuring Assignment

*/


// const obj = {
//      nome: 'fulano',
//      idade: 32,
// }

// const {
//      nome: userName,
//      idade: userAge
// } = obj

// console.log(`${userName} possui ${userAge} anos.`)


function transformarEmJson(response) {
     return response.json()
     //* O return passa o .json para o próximo .then, caso exista.
     //* O .json é uma Promise. Sem o return, teria que ter um novo .then
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
     const dados = await fetch("https://jsonplaceholder.typicode.com/users/1"/*, configs */)
          .then(transformarEmJson)
          .catch(exibirErro)

     console.log(dados) //*Só vai executar o console.log após terminar de executar o fetch (que, lembrando, é uma função assíncrona)
     const {
          name: nome,
          email,
          phone: fone,
     } = dados
     console.log(`Nome: ${nome}. Telefone: ${fone}. E-mail: ${email}`)
}
     