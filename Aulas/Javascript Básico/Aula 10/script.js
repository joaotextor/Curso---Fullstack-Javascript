let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseFloat(inputNota1)
let nota2 = parseFloat(inputNota2) 

let media = (nota1 + nota2) / 2
let mediaMinima = 7

let resultado

/* If normal
-------------------------------- 
if (media >= mediaMinima && media < 10) {
    resultado = 'Passou de ano'
} else if (media < 7 && media > 3) {
    resultado = 'Ops, reprovou'
} else if (media <= 3) {
    resultado = 'Vish, tá difícil hein!'
} else {
    resultado = 'Meus parabéns. Gabaritou!'
}
*/

/* Short hand */
resultado = (media >= mediaMinima && media < 10) ? 'Passou de ano' : (media < 7 && media > 3) ? 'Ops, reprovou!' : (media <= 3) ? 'Vish, tá dificil hein!' : (media === 10) ? 'Meus parabéns. Gabaritou!' : ''

document.write(media)
document.write(`. ${resultado}`)
