const input = require("readline-sync")
let base = Number(input.question())
let altura = Number(input.question())
let area = base * altura
let permerimetro = 2 * (base + altura)
console.log(permerimetro)
console.log(area)
