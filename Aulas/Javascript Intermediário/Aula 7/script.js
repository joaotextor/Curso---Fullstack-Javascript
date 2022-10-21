let botao = document.querySelector('#botao')
let toast = document.querySelector('.toast')
let tarefa = document.querySelector('#tarefa')

const toastShow = () => {
    toast.innerHTML = `Tarefa '${tarefa.value}' cadastrada com sucesso!`
    toast.classList.add('visible')
    setTimeout(() => {
        toast.classList.remove('visible')

}, 5000)}

botao.addEventListener('click', toastShow)