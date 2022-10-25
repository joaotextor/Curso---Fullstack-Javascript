/*

* Método MAP - Mapear arrays para montar uma array. 
! o "Map" SEMPRE retorna uma array
? Serve mais para programação funcional

*/

const clientes = [
    {name: 'Fulano', lastname: 'De Tal'},
    {name: 'Ciclano', lastname: 'Da Silva'},
    {name: 'Milano', lastname: 'Dos Santos'}
]


//* Abordagem SEM usar o MAP
let clientesFinal = []
clientes.forEach(function(cliente) {
    clientesFinal.push(`${clientes[0].name} ${cliente.lastname}`)
})


console.log(clientesFinal)


//* Método MAP
const clientesFinalMap = clientes.map(cliente => `${cliente.name} ${cliente.lastname}`) //! o MAP exige um return

console.log(clientesFinalMap)