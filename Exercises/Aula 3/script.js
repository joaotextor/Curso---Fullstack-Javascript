let nome = ''
let idade = ''
let maioridade = 18
let maior

const dataCapture = () => {
    nome = prompt("Digite seu nome")
    idade = prompt("Digite sua idade")
    maior = (idade < maioridade) ? "MENOR" : "MAIOR";

    document.querySelector("#h1").innerHTML = `Olá, ${nome}, você é ${maior} de idade.`
    console.log(`Olá, ${nome}, você é ${maior} de idade.`)

    const matrix = (nome == "Thomas Anderson") ? " Você é o personagem do filme Matrix!" : ''
    document.querySelector("#h2").innerHTML = matrix
}


