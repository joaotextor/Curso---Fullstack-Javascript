let contador = document.getElementById('contador')
let btnSoma = document.getElementById('btnSoma')
let btnSubtrai = document.getElementById('btnSubtrai')

contador.innerText = 0

let btnAtivo = ''
let fSoma
let fSubtrai

const soma = () => {
        clearInterval(fSubtrai)
        fSoma = setInterval(() => {
        let num = parseInt(contador.innerText)
        num++
        contador.innerText = num
        btnSoma.classList.add('verde')
        btnSubtrai.classList.remove('vermelho')
    }, 100)
}

const subtrai = () => {
        clearInterval(fSoma)
        fSubtrai = setInterval(() => {
        let num = parseInt(contador.innerText)
        num--
        contador.innerText = num
        btnSoma.classList.remove('verde')
        btnSubtrai.classList.add('vermelho')
    }, 100)
}

btnSoma.addEventListener('click', soma)
btnSubtrai.addEventListener('click', subtrai)