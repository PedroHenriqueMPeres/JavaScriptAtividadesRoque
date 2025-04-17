// Crie um sistema que permita cadastrar nomes. Antes de adicionar,
// verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
// não estiver, adicione o usuário.

var prompt = require('prompt-sync')();
let cadastroName = ['RyanKure'];

let nome;

do {
    nome = prompt("Digite seu nome ou digite 'sair' para encerrar): ").trim();

    if (nome.toLowerCase() === "sair") {
        break;
    }

    const existe = cadastroName.some(n => n.toLowerCase() === nome.toLowerCase());
    if (existe) {
        console.log("Cadastro inválido, o nome já é utilizado.");
    } else {
        cadastroName.push(nome);
        console.log("Cadastro criado... adicionado ao sistema.");
    }

}while (true);

console.log("Lista final:", cadastroName);