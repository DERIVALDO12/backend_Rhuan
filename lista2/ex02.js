const input = require('readline-sync')
function validarSenha(senha) {
    return senha.length >= 8
}
let senhaInformada = input.question()
if (validarSenha(senhaInformada)) {
    console.log("Senha valida")
} else {
    console.log("Senha fraca  minimo 8 caracteres")
}