/*

* AJAX - NÃO É MAIS UTILIZADO, MAS IMPORTANTE SABER

! Asynchronous JavaScript And XML (Não precisa usar somente XML)

* TODAS (Endpoint)

*/

//TODO: HTML AND CSS - Title and Image from json Placeholder.

const Main = {
     init: function() {
          this.cacheSelectors()
          this.insertHtml()
     },

     cacheSelectors: function () {
          this.$listContainer = document.querySelector(".container")
     },

     cacheJson: function () {
          const xhttp = new XMLHttpRequest()
          let response
          xhttp.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) { 
               //4 = finalizada | 200 = SUCESSO
               response = JSON.parse(this.responseText)
               //console.log(response[0])
               }         

          }
          xhttp.open('GET', "https://jsonplaceholder.typicode.com/photos", false) //True para Assíncrono
          xhttp.send() //envia a requisição de conexão
          return response
     },

     insertHtml: function() {
          
          for (i = 0; i < 10; i++) {
               const title = this.cacheJson()[i].title
               const url = this.cacheJson()[i].url
               this.$listContainer.innerHTML += `
               <ul class="photoList">
                    <li class="title">
                         ${title}
                    </li>
                    <li class="photo">
                         <img class="picture" src="${url}">
                    </li>
               </ul>
               `
          }
     }
}

Main.init()