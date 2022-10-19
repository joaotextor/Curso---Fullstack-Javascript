/*

*/


let idade = prompt('Digite sua idade:')
let maior
// if (idade >= 18) {
//     maior = 'É maior de idade'
// } else if (idade === 15) {
//    maior = 'Possui 15 anos'
//   } else
//       maior = 'É menor de idade'

maior = (idade >= 18) ? 'É maior de idade' : (idade == 15) ? 'Possui 15 anos' : 'Não é maior de idade' //Shorthand da condição anterior (IF, ELSE IF e ELSE)

document.write(maior)

let nome = prompt("Digite seu nome")

if (nome === "João" || nome === "joão") {
    document.write(`. Olá, ${nome}. Seja bem vindo`)
} else {18
    document.write(`. Me desculpe, ${nome}, você não possui acesso de administrador.`)
}
