var prompt = require('prompt-sync')();


let idade =0;
do{
    console.log("dado invalido")
    idade = prompt("Digite um número: ");
}while(( idade <= 0)){
    console.log("Funcionou parabens")
}