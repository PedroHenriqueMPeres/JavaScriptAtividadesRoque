var prompt = require('prompt-sync')();

let senha = prompt("Digite a senha: ");
let resposta = prompt("Digite a senha novamente: ");

while(senha != resposta)
{
    resposta = prompt("Digite a senha novamente: ");
}

console.log("Senha Verificada!")