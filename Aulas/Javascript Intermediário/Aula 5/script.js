let botao = document.querySelector("#botaoTeste")

// onclick
// ! Not commonly used. Overwrites the onclick event
// botao.onclick = () => { alert("Mensagem 1") }
// botao.onclick = () => { alert("Mensagem 2") }

// * Good practice: addEventListener
// * Appends events instead of overwriting them

/*
botao.addEventListener('click', () => { 
    alert("Mensagem 1")
})

botao.addEventListener('click', () => { 
    alert("Mensagem 2")
})
*/

// * Or, a better practice:
// * why better? you can reutilize the function in other elements instead of needing to declare the function everytime you need it.

let contador = 0
const cliqueBotao = () => {
    contador++
    alert(`Mensagem ${contador}`)

    // if (contador >= 5) {
    //     botao.removeEventListener('click', cliqueBotao)
    // } 
    
    // * Shorthand if without the else ( ':' ):
    contador >= 5 && botao.removeEventListener('click', cliqueBotao)

    // * Use this if you want to remove the click event from the button after the first use. It will only be available again after page reloads and call the addEventListener once again.
}

botao.addEventListener('click', cliqueBotao); // ! DO NOT USE cliqueBotao(), otherwise it will be executed on page load, instead of onclick.

// * Remove event listeners
