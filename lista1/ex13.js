const input = require('readline-sync')
let total = 0
function rage (inicio, fim ){
    let resultado = []
for(let i = inicio; i <= fim; i++){
    resultado.push(i)
}
return resultado
}
function soma (array){
for (let numero of array){
    total = total + numero
}
return total
}
console.log(soma(rage(1, 10)))