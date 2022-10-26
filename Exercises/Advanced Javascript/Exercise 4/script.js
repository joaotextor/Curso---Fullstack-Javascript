const alunos = [
      {
        nome: 'Maria',
        sobrenome: 'da Silva',
        nota: 10,
      },
      {
        nome: 'José',
        sobrenome: 'Moreira',
        nota: 4,
      },
      {
        nome: 'Paulo',
        sobrenome: 'Henrique',
        nota: 7,
      },
      {
        nome: 'Sara',
        sobrenome: 'Souza',
        nota: 5,
      },
      {
        nome: 'Clara',
        sobrenome: 'Barbosa',
        nota: 9,
      },
      {
        nome: 'Rodrigo',
        sobrenome: 'Barros',
        nota: 4,
      },
      {
        nome: 'Renato',
        sobrenome: 'Barros',
        nota: 7,
      },
      {
        nome: 'Andrea',
        sobrenome: 'Batista',
        nota: 6,
      },
      {
        nome: 'Carla',
        sobrenome: 'Campos',
        nota: 3,
      },
    ]

const listaAlunos = document.querySelector('#listaAlunos')
const botao = document.querySelector('#btnBuscaAluno')
const nota = document.querySelector('#edtNota')

botao.onclick = () => filtraAlunos(alunos, nota.value)

const filtraAlunos = (lista, notaParaFiltro) => {
    this.listaAlunos.innerHTML = ''
    const alunosFiltrados = lista.filter(aluno => aluno.nota === parseInt(notaParaFiltro))
    if (!alunosFiltrados.length) {
        this.listaAlunos.innerHTML = "<li>Nenhum aluno com esta nota!</li>"
    } else {
        alunosFiltrados.forEach((aluno) => {
            this.listaAlunos.innerHTML += `
            <li>Nome: ${aluno.nome} ${aluno.sobrenome} | Nota: ${aluno.nota}</li>
            `
        })
    }    
}

