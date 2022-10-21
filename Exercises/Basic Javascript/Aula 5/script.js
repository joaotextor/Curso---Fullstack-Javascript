let tabuada = prompt('Qual tabuada você quer? Digite um número')
let resultado

for (i = 1; i <= 10; i++) {
    resultado = tabuada * i
    document.write(`${tabuada} x ${i} = ${resultado}`)
    document.write('<br>')
}