let contador = document.querySelector('.contador')
let titulo = document.querySelector('h1')
let botaoPausar = document.querySelector('#botaoPausar')

let count = 1000

const intervalo = setInterval(() => {
    count--
    contador.innerHTML = count
    count == 0 ? titulo.innerHTML = "BOOM" : ''
}, 10)



botaoPausar.addEventListener('click', () => {
        clearInterval(intervalo)
        contador.innerHTML = 'PAUSADO'
    })
