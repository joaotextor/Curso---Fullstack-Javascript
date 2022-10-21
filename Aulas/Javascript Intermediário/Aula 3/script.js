
//ID SELECTOR
document.querySelector("#titulo").innerHTML = "<i>EXEMPLO</i>"

//TAG SELECTOR - SELECTS ONLY THE FIRST OCURRENCY
document.querySelector("a").innerText = "<b>teste ancora<b>"

//SELECT MORE THAN ONE TAG
let ancoras = document.querySelectorAll("a")

ancoras.forEach(function(elemento) { //anonymous function - callback
    elemento.innerHTML = "teste"
})


//SELECT MORE THAN ONE CLASS

let boxes = document.querySelectorAll(".box") //anonymous function - callback

boxes.forEach(function(elemento, index) {
    elemento.innerHTML = `Box ${index+1}`
})
