let listaAtores = [

    {
        nome: 'Keanu Reeves',
        personagem: 'Neo',
        filme: 'The Matrix',
    },

    {
        nome: 'David Prowse',
        personagem: 'Darth Vader',
        filme: 'Star Wars Episódios IV-VI',
    },

    {
        nome: 'Bruce Wayne',
        personagem: 'Batman',
        filme: 'Batman - O Início'
    },
]

let htmlText = ''

document.body.innerHTML = '<div id="box-content"> </div>'

for (atores in listaAtores) {

    htmlText += `
    <div class="atores">
        <h1>${listaAtores[atores].nome}</h1>
        <span>Interpreta o personagem ${listaAtores[atores].personagem} no filme ${listaAtores[atores].filme}</span>
    </div>
    `
    document.querySelector("#box-content").innerHTML = htmlText;
}