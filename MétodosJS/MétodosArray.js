// .length() => tamanho
// 
// let frutas = ["Maçã", "Banana","Kiwi","Carambola","Morango","Ameixa","Abacaxi","Abacate","Jabuticaba","Maçã verde","Romã","Seriguela","Embu","Caqui","Uva verde","Uva roxa",]
// 
// console.log(frutas.length);
// 
// ----------------------------------------------------------------------------------------------------------------------------
// 
// let numeros = [10, 9, 8, 7, 6, 5,  4, 3, 2, 1]
// 
// numeros.reverse();
// 
// console.log(numeros)
//
// ----------------------------------------------------------------------------------------------------------------------------
//
// let nome = ["Walter", "Edson", "Anna", "Gilberto",]
//
// // Adiciona no final
// nome.push("Alberto")
//
// // Adiciona no inicio
// nome.unshift("Samanta")
//
// nome.shift();
// Remove do final
// nome.pop();
//
// nome.splice(1, 0)
//
// O POP alem de remover ele tambem lista quem ele removeu
// console.log(nome.pop())
//
// console.log(nome)
// --------------------------------------------------------------------------------------------------------------------------
//
// let animais = ["Julie",  "Meggye", "Mel", "Kiara", "Lola", "Sol"]
//
// console.log(animais.includes("Meggye"));
//
// --------------------------------------------------------------------------------------------------------------------------
//
// let valores = [30, 55, 90, 66]
// const maiores = valores.filter(num => num > 50);
// console.log(maiores); 
//
// -------------------------------------------------------------------------------------------------------------------------
//
// let alunos = [
//     {nome:"Herik", nota: 5}, 
//     {nome:"Sillas", nota:10}
// ];
//
// let ALN = alunos.map(aluno => aluno.nome)
// 
// console.log(alunos);
// console.log(ALN);
//
// -----------------------------------------------------------------------------------------------------------------------
//
// let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];
//
// let mensagem = nomes.map(itemDoArrayNomes => `Ola, ${itemDoArrayNomes}`)
// console.log(mensagem);
//
// ----------------------------------------------------------------------------------------------------------------------
//
// let nomes = ["Sillas", "Herik", "Anna", "Brito"]
// let IN = nomes.map(Element => Element[0]);
//
// console.log(IN);
//
// ----------------------------------------------------------------------------------------------------------------------
//
// let emails = ["Sillas@gmail.com", "Herik@gmail.com", "Anna@gmail.com", "Brito@gmail.com"]
// let dominios = emails.map(element => element.split("@")[1]);
//
// console.log(dominios);
//
// ---------------------------------------------------------------------------------------------------------------------