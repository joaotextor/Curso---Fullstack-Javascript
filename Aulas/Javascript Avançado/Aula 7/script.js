/*

* JSON = JAVASCRIPT OBJECT NOTATION

* Notação para transitar informação entre sistemas diferentes
* A informação vem sempre em uma string JSON que deve ser convertida em objeto
* Para enviar um objeto, converte-se em string no formato JSON

*/

const objeto = {
     nome: 'fulano',
     idade: 23,
}


const json = JSON.stringify(objeto)


console.log(json)
//~ Isso irá mostrar a seguinte string : {"nome":"fulano","idade":23}

const jsonParsed = JSON.parse(json)
console.log(jsonParsed)