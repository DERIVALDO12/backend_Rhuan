const input = require('readline-sync')
const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Fone de Ouvido", preco: 120 },
    { id: 5, nome: "Mousepad", preco: 40 }
]
const produtoId3 = produtos.find(p => p.id === 3)
console.log(produtoId3)

const nomes = produtos.map(p => p.nome)
console.log(nomes)


const caros = produtos.filter(p => p.preco > 100)
console.log(caros)

console.log("Lista Formada")
produtos.forEach(p => {
    console.log(`- ${p.nome} custa R$ ${p.preco}`)
})