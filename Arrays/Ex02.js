var prompt = require('prompt-sync')();

let turm = ["TurmaDev", "TurmaRedes", ["TurmaGame"]];
console.log("Mostrando as turmas da manhã", turm);
let manha = prompt("Registe aqui turmas da manhã: ");
turm.push(manha)
console.log(turm)
