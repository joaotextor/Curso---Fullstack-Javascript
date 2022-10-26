const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}

//TODO return the mean of grades the following way:
//*A média de Maria foi de X para o total de Y bimestres

let bimestres = aluno.notas.length

const mediaMaria = aluno.notas.reduce((acc, curr) => {
    acc.soma += curr
    acc.media = Math.round(acc.soma / bimestres)

    return acc
}, {soma: 0, media: 0})

console.log(`A média de ${aluno.nome} foi de ${mediaMaria.media} para o total de ${bimestres} bimestres`)