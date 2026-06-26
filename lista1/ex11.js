const input = require('readline-sync');
let idade = input.question()
let podevotar = 16
function RONALDO(podevotar, idade ) {
    if (idade >= podevotar) {
        return ("vc pode votar")
    }
    else{
        return ("nao pode votar ")
    }
}
console.log(RONALDO(podevotar, idade))
