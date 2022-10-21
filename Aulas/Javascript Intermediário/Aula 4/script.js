let menuMobile = document.querySelector(".menuMobile")
let botaoMenu = document.querySelector(".botaoMenu")
const menuAbrirFechar = () => { 
    if (botaoMenu.innerText == "Abrir Menu") {
        menuMobile.classList.add("aberto")
        botaoMenu.classList.add("aberto")
        botaoMenu.innerText = "Fechar Menu"
    } else {
        menuMobile.classList.remove("aberto")
        botaoMenu.classList.remove("aberto")
        botaoMenu.innerText = "Abrir Menu"
    }
        
}