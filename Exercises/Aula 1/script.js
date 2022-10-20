let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let maioridade = 18
let maior

maior = (idade < maioridade) ? "menor" : "maior";

document.write(`Olá, ${nome}, você é ${maior} de idade.`)