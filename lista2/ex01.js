const input = require('readline-sync')
let resultado
function soma ( a , b ) {
resultado = a + b ;
return resultado ;
}
function sub  ( a , b ) {
resultado = a - b ;
return resultado ;
}

function multi ( a , b ) {
resultado = a * b ;
return resultado ;
}

function divisao ( a , b ) {
resultado = a / b ;
return resultado ;
}

const num1 = input.questionInt()
const num2 = input.questionInt()
console.log( soma(num1, num2))
console.log( sub(num1, num2))
console.log( multi(num1, num2))
console.log( divisao(num1, num2))