function limparEspacosDobrados() {
  const texto = prompt("Digite uma frase com espaços repetidos:");

  if (texto === null) {
    console.log("Entrada cancelada.");
    return '';
  }

  const fraseLimpa = texto
    .split(' ')
    .filter(palavra => palavra !== '') // remove os vazios
    .join(' '); // junta com um único espaço

  console.log(`Frase limpa: "${fraseLimpa}"`);
  return fraseLimpa;
}

limparEspacosDobrados();
