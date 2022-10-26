/*

* REDUCE
* PERCORRE ARRAYS
* MANIPULA ELEMENTOS
* RETORNA O QUE DESEJAR, NÃO APENAS UM ARRAY

*/

const clientes = [
    {name: 'Thiago', score: 34},
    {name: 'Jaqueline', score: 38},
    {name: 'Pedro', score: 32},
    {name: 'Sarah', score: 80},
    {name: 'Clara', score: 50},
    {name: 'Sophia', score: 98},
]

//* SEM REDUCE:

// clientesScored = {
//     passed: [],
//     failed: []
// }

// clientesScored.passed.push(clientes.filter(cliente => cliente.score >=50))
// clientesScored.failed.push(clientes.filter(cliente => cliente.score <50))

// console.log(clientesScored.passed)
// console.log(clientesScored.failed)

//BP: COM REDUCE

//acc = accumulator
//curr = current

//* The reduce function works with 2 params: first, a function to run over the elements and a property that will contain the results inside the accumulator
const clientesFinal = clientes.reduce((acc, curr) => {
    curr.score >= 50 ? acc.pass.push(curr) : acc.fail.push(curr)

    return acc //* return so it can be loaded again on the next iteration
}, {
    pass: [], //*property of accumulator (acc.pass)
    fail: []  //*property of accumulator (acc.fail)
})

console.log(clientesFinal)

const numeros = [1, 2, 3, 4]

const numerosFinal = numeros.reduce((acc, curr) => {
    acc+= `${curr+1} - `
    return acc
}, '')

console.log(numerosFinal.slice(0, -2))