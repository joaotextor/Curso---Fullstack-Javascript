/*

* CALLBACKS

*/

function montarHtml(dados) {
     console.log(dados)
}

const button = document.querySelector('#callbackButton')
button.onclick = () => carregarFotos(montarHtml)

function carregarFotos(callback) {
     const xhttp = new XMLHttpRequest()
     let response
     xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) { 
          //4 = finalizada | 200 = SUCESSO
          const response = JSON.parse(this.responseText)
          //console.log(response[0])
          
          if (callback) {
               callback(response)
          }
          }         
     
     }
     xhttp.open('GET', "https://jsonplaceholder.typicode.com/photos", true) //True para Assíncrono
     xhttp.send() //envia a requisição de conexão
}

