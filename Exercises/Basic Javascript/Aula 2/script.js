let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let maioridade = 18
let maior

maior = (idade < maioridade) ? "MENOR" : "MAIOR";

document.write(`Olá, ${nome}, você é ${maior} de idade.`)

// if (nome === "Thomas Anderson") {
//     document.write(' Você é o personagem do filme Matrix!')
// }

const matrix = (nome == "Thomas Anderson") ? " Você é o personagem do filme Matrix!" : ''
document.write(matrix)
