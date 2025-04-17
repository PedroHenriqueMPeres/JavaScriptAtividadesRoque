var prompt = require('prompt-sync')();

let idade = prompt("Ola, digite sua Idade:");

if(idade >= 18 ){
    console.log("Voce podera tirar a carteira!!")
}else if(idade < 18){
    console.log("Voce nao podera tirar a carteira!")
}else{
    console.log("Essa informacao nao é valida!")
}