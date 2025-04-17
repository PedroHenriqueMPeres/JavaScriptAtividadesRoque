var prompt = require('prompt-sync')();

console.log("=== Spadas Empresas === ")
console.log(" *Selecione uma opção* ")

console.log("* 1. Listar")
console.log("* 0. Sair")

let menu = Number(prompt("Digite o numero da opção: "));

do{
    console.log("Você escolheu a opção 1");
    console.log("====================================");

    console.log("* Sony Interactive Entertainment");
    console.log("* Microsoft");
    console.log("* Nintendo");
    console.log("====================================")

    console.log("=== Spadas Lojas === ");
    console.log(" *Selecione uma opção* ");
    console.log("====================================")

    console.log("* 1. Listar");
    console.log("* 0. Sair");
    console.log("====================================")
    
    menu = Number(prompt("Digite o numero da opção: "));

}
while(menu === 1)
{
    console.log("Você escolheu sair! Finalizando...")
}
    