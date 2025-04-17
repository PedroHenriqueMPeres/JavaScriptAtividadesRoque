var prompt = require('prompt-sync')();

let número = Number(prompt("Ola, digite sua número:"));

if (número % 2 === 0) {
    console.log("Esse numero é positivo");
} else {
    console.log("Esse numero é negativo");
}