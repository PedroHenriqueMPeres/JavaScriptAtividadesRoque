var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");

function maiorPalavra(frase) {
  return frase
    .split(' ')
    .reduce((maior, palavra) => palavra.length > maior.length ? palavra : maior, '');
}

let resultado = maiorPalavra(frase);
console.log("A maior palavra é:", resultado);
