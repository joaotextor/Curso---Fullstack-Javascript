let formulario = document.querySelector('#formCadastro')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    let inputNome = document.forms['formCadastro']['nome']
    let erro = false

    if(!inputNome.value) {
        erro = true
        let span = inputNome.nextSibling.nextSibling
        inputNome.classList.add('inputError')
        span.innerText = "Digite o nome corretamente..."
        span.classList.add('error')
    } else {
        let span = inputNome.nextSibling.nextSibling
        inputNome.classList.remove('inputError')
        span.innerText = ""
    }    
    
    let inputEmail = document.forms['formCadastro']['email']

    if(!inputEmail.value) {
        erro = true
        inputEmail.classList.add('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.classList.add('error')
        span.innerText = "Digite o e-mail corretamente..."
    } else {
        inputEmail.classList.remove('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.classList.remove('error')
        span.innerText = ""
    }

    let selectCidade = document.forms['formCadastro']['cidade']

    if(!selectCidade.value) {
        erro = true
        selectCidade.classList.add('inputError')
        let span = selectCidade.nextSibling.nextSibling
        span.classList.add('error')
        span.innerText = "Selecione uma cidade..."
    } else {
        selectCidade.classList.remove('inputError')
        let span = selectCidade.nextSibling.nextSibling
        span.classList.remove('error')
        span.innerText = ""
    }

    erro == false && formulario.submit()
    
})