var prompt = require('prompt-sync')();

let nota1 = prompt("Ola, digite a primeira nota:");
let nota2 = prompt("Ola, digite a primeira nota:");

function media( nota1, nota2){
    return nota1 + nota2/2;
}

let resultado = media( nota1, nota2)
if(resultado > 7){
    console.log("APROVADO!!!")
}
else if(resultado = 7){
    console.log("passou raspando")
}else{
    console.log("reprovado")
}