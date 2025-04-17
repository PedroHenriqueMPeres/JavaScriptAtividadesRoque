function removerEspacosRepetidos(frase) {
    return frase
      .split(' ')                    // divide a frase em partes sempre que houver um espaço
      .filter(palavra => palavra)   // remove os elementos vazios (ou seja, espaços extras)
      .join(' ');                   // junta tudo de novo com um único espaço
  }
  
  // Exemplo de uso:
  const frase = "Olá   mundo     bonito";
  console.log(removerEspacosRepetidos(frase));  // Saída: "Olá mundo bonito"
  