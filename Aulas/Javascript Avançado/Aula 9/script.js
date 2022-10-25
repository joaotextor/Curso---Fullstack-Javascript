/*

* SÍNCRONO VS. ASSÍNCRONO

*/

function primeira() {
     console.log("primeira")
}

function segunda() {
     console.log("segunda")
}

setTimeout(primeira, 2000) //setTimeout é uma função assíncrona, por isso não aguarda o tempo para continuar a execução do código


segunda() //função síncrona