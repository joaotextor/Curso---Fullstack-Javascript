/*

* PROMISES

*/

function montarHtml(dados) {
     console.log(dados)
}

function exibirErro() {
     console.log("Página não encontrada")
}

const button = document.querySelector('#callbackButton')
button.onclick = () => 
     fetch("https://jsonplaceholder.typicode.com/photos", 'GET')
     .then(montarHtml)
     .catch(exibirErro)

function fetch(url, method) {
     return new Promise((resolve, reject) => {
          const xhttp = new XMLHttpRequest()
          let response
          xhttp.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) { 
               //4 = finalizada | 200 = SUCESSO
                    const response = JSON.parse(this.responseText)
                    //console.log(response[0])
                    resolve(response) //* This will be consumed by ".then()" of the promise               }
               }

               if (this.status === 404) {
                    reject()
               }
          }
          xhttp.open(method, url, true) //True para Assíncrono
          xhttp.send() //envia a requisição de conexão
     })
}

