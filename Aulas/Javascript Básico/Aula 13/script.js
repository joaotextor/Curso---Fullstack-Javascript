let clientes = [
    {
        nome: 'João',
        idade: 32,
        linguagens: ['javascript', 'python', 'php']
    },
    {
        nome: 'Thiago',
        idade: 35,
        linguagens: ['javascript', 'c#']
    },
    {
        nome: 'Raimundo',
        idade: 70,
        linguagens: ['assembly', 'binary', 'punch cards']
    }
]

let htmlClientes = ''

for (let cliente of clientes) {

    let listaLinguagens = ''
    for (let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `
    <li>
        <b>Nome:</b> ${cliente.nome}<br>
        <b>Idade:</b> ${cliente.idade}<br>
        <b>Linguagens:</b><br>
        <ul>
            ${listaLinguagens}
        </ul>
    </li>
    `
}




document.querySelector('#listaClientes').innerHTML = htmlClientes