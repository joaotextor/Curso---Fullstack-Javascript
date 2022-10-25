/*

* Método FILTER - Mapear arrays para montar uma array com determinadas condições

*/

const clientes = [
    {name: 'Fulano', lastname: 'De Tal', age: 36},
    {name: 'Ciclano', lastname: 'Da Silva', age: 16},
    {name: 'Milano', lastname: 'Dos Santos', age: 19}
]

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18)

console.log(clientesMaiores)