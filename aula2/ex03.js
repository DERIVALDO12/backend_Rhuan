const input = require('readline-sync')
const soma = (a, b) => a + b
const sub = (a, b) => a - b
const multi = (a, b) => a * b
const divisao = (a, b) => {
    if (b === 0) {
        return "A divisão não existe"
    }
    return a / b
}
const num1 = input.questionInt()
const num2 = input.questionInt()
console.log( soma(num1, num2))
console.log( sub(num1, num2))
console.log( multi(num1, num2))
console.log( divisao(num1, num2))