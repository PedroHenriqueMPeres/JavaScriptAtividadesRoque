function palavrasGrandes(lista) {
    return lista.filter(palavra => palavra.length > 5);
  }
  
  // Exemplo de uso:
  const palavras = ["amor", "javascript", "sol", "programar", "café", "amizade"];
  const resultado = palavrasGrandes(palavras);
  console.log(resultado); // Saída: ["javascript", "programar", "amizade"]
  