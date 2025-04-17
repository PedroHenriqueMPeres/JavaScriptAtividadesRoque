function limparTexto(texto) {
    return texto.replace(/[^a-zA-Z0-9]/g, '');
  }
  
  // Exemplo de uso:
  const texto = "Olá, mundo! 123 :)";
  const resultado = limparTexto(texto);
  console.log(resultado); // Saída: "Olámundo123"
  