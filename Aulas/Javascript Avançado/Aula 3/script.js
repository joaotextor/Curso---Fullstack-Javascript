/*

* ARROW FUNCTIONS (ES6)

*/

// const teste = (param1, param2) => {
//     console.log(param1, param2)
// }

// teste(1,2)

//~ Quando o único objetivo da function é retornar um parâmetro, pode-se suprimir o  "return" e as chaves {}
const soma = (param1, param2) => param1 + param2

const resultado = soma(1,2)

console.log(resultado)

//~ Havendo apenas 1 parâmetro, desnecessário o parêntese
const teste = param1 => param1

console.log(teste('ok'))

const botao = document.getElementById('botao')

// botao.onclick = function () {
//     console.log(this) //~ Retorna o próprio botão
// }

//! Em Arrow Functions, o "this" é do escopo de onde ela foi declarada.
//! Nesse caso, ela foi declarada no escopo global, então o "this" é o Window
botao.onclick = () => {
    console.log(this) //! Aqui, o "this" é o Window
}