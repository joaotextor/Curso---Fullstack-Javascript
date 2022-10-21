let contador = document.getElementById('contador')
let btnSoma = document.getElementById('btnSoma')
let btnSubstrai = document.getElementById('btnSubtrai')

contador.innerText = 0

const soma = btnSoma.addEventListener('click', () => {
    let num = parseInt(contador.innerText)
    num++
    contador.innerText = num
})

const subtrai = btnSubtrai.addEventListener('click', () => {
    let num = parseInt(contador.innerText)
    num--
    contador.innerText = num
})