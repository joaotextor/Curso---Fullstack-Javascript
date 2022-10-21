const cidades = {

    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],

    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

let listaEstados = document.getElementById('estados')
let listaCidades = document.getElementById('cidades')
let formulario = document.getElementById('form')
let selectEstados = document.forms['form']['estados']
let lblCidades = document.querySelector('.lblcidades')
let selectCidades = document.forms['form']['cidades']
let botaoEnviar = document.getElementById('enviar')

listaEstados.addEventListener('change', () => {
    let spanEstado = selectEstados.nextSibling.nextSibling
    spanEstado.classList.remove('error')
    selectEstados.classList.remove('inputError')

    let spanCidade = selectCidades.nextSibling.nextSibling
    spanCidade.classList.remove('error')
    selectCidades.classList.remove('inputError')

    if (listaEstados.value === "SP") {
        // divCidade.innerHTML = "<label class='cidades'>Cidades:     <select id='cidades' class='listaCidades'> </select> <span>Por favor, selecione uma Cidade!</span> </label>"
        listaCidades.innerHTML = "<option value=''>-- Selecione a Cidade --</option>"
        for (let cidade in cidades.sp) {
            listaCidades.innerHTML += `
            <option>${cidades.sp[cidade]}</option>
            `
        }
        lblCidades.classList.add('cidadesVisivel')
    } else if (listaEstados.value === "RJ") {
        listaCidades.innerHTML = "<option value=''>-- Selecione a Cidade --</option>"
        for (let cidade in cidades.rj) {
            listaCidades.innerHTML += `
            <option>${cidades.rj[cidade]}</option>
            `
        }
        lblCidades.classList.add('cidadesVisivel')
        } else {
            lblCidades.classList.remove('cidadesVisivel')
        }

})

listaCidades.addEventListener('change', () => {
    let spanEstado = selectEstados.nextSibling.nextSibling
    spanEstado.classList.remove('error')
    selectEstados.classList.remove('inputError')

    let spanCidade = selectCidades.nextSibling.nextSibling
    spanCidade.classList.remove('error')
    selectCidades.classList.remove('inputError')
})



formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    let error = false

    if (!selectEstados.value) {
        error = true
        let span = selectEstados.nextSibling.nextSibling
        span.classList.add('error')
        selectEstados.classList.add('inputError')
        } else {
            let span = selectEstados.nextSibling.nextSibling
            span.classList.remove('error')
            selectEstados.classList.remove('inputError')
    }

    

    if (!selectCidades.value && selectEstados.value != '') {
        error = true
        let span = selectCidades.nextSibling.nextSibling
        span.classList.add('error')
        selectCidades.classList.add('inputError')
        } else {
            let span = selectCidades.nextSibling.nextSibling
            span.classList.remove('error')
            selectCidades.classList.remove('inputError')
    }

    error == false && formulario.submit()

}
)


