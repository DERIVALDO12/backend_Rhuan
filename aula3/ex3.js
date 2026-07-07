const input = require('readline-sync')
const produtos = [
{id: 1, nome: "ps5",  preco: 1000},
{id: 2, nome: "salgado",  preco: 10},
{id: 3, nome: "lapis",  preco: 5000},
{id: 4, nome: "caneta DO DIEGO",  preco: 100000}
]
for(let i = 0; i < produtos.length; i++){
    console.log(produtos[i])
}
produtos.push({id: 5, nome:  "coxinha sem massa gigante com catupiri", preco: 1000})

console.log("item novo")

for(let i = 0; i < produtos.length; i++){
    console.log(produtos[i])
}


console.log(produtos.length)


console.log("")
console.log("--------------------------------------------------------------")
console.log("")
