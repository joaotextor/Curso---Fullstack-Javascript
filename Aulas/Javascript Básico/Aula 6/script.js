/*

string
number
boolean
array
object
undefined
null

*/

//String
let nome = "João"
console.log(nome)

// Concatenated string
let sobrenome = "Textor"
//console.log(nome +" "+sobrenome)
console.log(`${nome} ${sobrenome}`)

//number - integer
let idade = 32
console.log(idade+10)

// float
let porcentagem = 10.2
console.log(porcentagem)

//boolean (true or false)
let maiorDeIdade = true
console.log(maiorDeIdade)

//array
let cores = [
    'amarelo',
    'vermelho',
    'azul',
    'verde',
    'preto',
    'branco'
]

console.log(cores)
console.table(cores)
console.log(cores.length)
console.log(cores[2])

//object

let pessoa = {
    nome: 'João',
    sobrenome: 'Textor',
    idade: 32,
    habilidades: [
        'Basic Python',
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'Delphi'
    ]
}

console.table(pessoa)
console.table(pessoa.habilidades)

//undefined - foi definida, mas não declarada

let endereco
console.log(endereco)

//null

let cidade = null