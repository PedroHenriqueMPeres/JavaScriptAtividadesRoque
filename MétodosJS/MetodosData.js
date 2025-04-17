let agora = new Date();
let horaBrasilia = agora.toLocaleString("pt-br", {timeZone: "America/Sao_Paulo"});

console.log(agora.getFullYear());
console.log(agora.getDate());
console.log(agora.getDay());
console.log(agora.getMilliseconds());
console.log(agora.getMonth());