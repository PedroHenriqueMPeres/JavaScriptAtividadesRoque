var prompt = require('prompt-sync')();

let senha = 1234
let resposta = prompt("Ola, digite sua senha:");

if (senha = resposta) {
    console.log("Acesso Liberado");
} else {
    console.log("Acesso Negado");
}