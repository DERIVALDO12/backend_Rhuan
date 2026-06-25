const input = require('readline-sync');
let palavra = input.question()
let letra = input.question()
let cont = 0
function seila ( palavra , letra ) {
for(let i = 0; i < palavra.length; i++){
    if(palavra[i] === letra){
        cont++
    }


}
return cont ;

}
console.log(seila(palavra, letra,))




