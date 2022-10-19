
let opcoes

for (let contador = 2022; contador >= 1900; contador--) {
opcoes = `<option>${contador}</option>` //If you concatenate here, it will erase the '--Selecione--' option.
document.querySelector('#ano').innerHTML += opcoes
}

let clientes = ['Thiago', 'João', 'Rafael', 'Fulano']
let itemLista

for (let i = 0; i <= clientes.length-1; i++) {
     itemLista = `<li>${clientes[i]}</li>`
     document.querySelector('#listaDeClientes').innerHTML += itemLista
 }