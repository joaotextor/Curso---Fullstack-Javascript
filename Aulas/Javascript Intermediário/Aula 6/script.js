let quadrado = document.querySelector('.quadrado')

minhaFuncao = () => {
    alert('mensagem')
}

// quadrado.addEventListener('click', minhaFuncao)

// quadrado.addEventListener('mouseover', minhaFuncao)

// quadrado.addEventListener('mouseenter', minhaFuncao)

// quadrado.addEventListener('mouseleave', minhaFuncao)

/*
let eventObject = (evento) => {
    console.log(evento.target.innerWidth)
}
 window.addEventListener('resize', eventObject)

 */
let mensagem = ''
 let eventObject = (evento) => {
    if (evento.key == "Backspace") {
        mensagem = mensagem.slice(0, -1)
        
    } else if (evento.key == "Dead" || evento.key == "Shift" || evento.key == "Control" || evento.key == "Enter") {
        mensagem = mensagem
    } else {
        mensagem += evento.key
    }
       
    console.log(mensagem)
}

window.addEventListener('keydown', eventObject)