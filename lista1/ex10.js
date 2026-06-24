const input = require('readline-sync');
let palavra = input.question()
let letra = input.question()
function seila ( palavra , letra ) {
for(let i = 0; i < palavra.length; i++){
    if(palavra[i] === letra){
        i++
    }


}
return i ;

}
console.log(seila(palavra, letra))




