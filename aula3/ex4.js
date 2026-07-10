const input = require('readline-sync')
const alunos = [
{id: 1, nome: "rhuan",  nota: 7},
{id: 2, nome: "pietro",  nota: 10},
{id: 3, nome: "muliro",  nota: 6},
{id: 4, nome: "diegao",  nota: 9.9},
{id: 5, nome: "jean",  nota: 9.8}
]
const Situacao = alunos.map(aluno => {
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  }
}
)
console.log(Situacao);

