/*

* LOCAL STORAGE

*/

const tarefas = [
     { tarefa: 'study javascript' },
     { tarefa: 'clean the house' },
     { tarefa: 'grosseries' },
]
const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tasks', tarefasJson)

const listaTarefasSalvas = JSON.parse(localStorage.getItem('tasks'))
console.log(listaTarefasSalvas)