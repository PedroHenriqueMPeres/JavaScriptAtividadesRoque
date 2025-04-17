// Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
// &#39;a&#39;). Use split(), startsWith() e filter().

var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");
let letra = prompt("Digite a letra:")
let resultado = frase
  .split(" ")                              // vira um array de palavras
  .filter(palavra => palavra.toLowerCase().startsWith(letra)); // filtra as que começam com a letra escrita tlgd

console.log(resultado); 
