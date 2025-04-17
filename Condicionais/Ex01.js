var prompt = require('prompt-sync')();

let idade = prompt("Ola, digite um numero:");

if(idade > 0 ){
    console.log("O número é positivo!!!")
}else if(idade == 0){
    console.log("O numero é zero")
}else {
    console.log("Esse número é negativo")
}