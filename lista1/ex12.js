const input = require('readline-sync')
let seila = Number(input.question())
let outroseila = Number(input.question())

let conta = seila 
function RONALDO( seila, outroseila, rhuan){
 
     

return rhuan(seila, outroseila)

}

console.log(RONALDO(seila, outroseila, (x, y) => x + y))
console.log(RONALDO(seila, outroseila, (x, y) => x - y))
console.log(RONALDO(seila, outroseila, (x, y) => x * y))