const input = require('readline-sync')
const aluno = {
nome: "rhuan",
idade: 16,
nota: 10,
curso: "desenvolvimento",
cidade: "catanduvas"
}


console.log(`o ${aluno.nome} tem ${aluno.idade} anos com nota igual a ${aluno.nota} ele é do curso de ${aluno.curso} e é da cidade de ${aluno.cidade}  `)
aluno.cidade = "cascavel";
console.log(`o ${aluno.nome} tem ${aluno.idade} anos com nota igual a ${aluno.nota} ele é do curso de ${aluno.curso} e é da cidade de ${aluno.cidade}  `)


