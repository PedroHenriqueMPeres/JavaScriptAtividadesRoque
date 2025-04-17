function verificarEmail(email) {
    // Verifica se contém "@" e "."
    const temArroba = email.includes('@');
    const temPonto = email.includes('.');
  
    // Verifica se o "@" vem antes do "."
    const indexArroba = email.indexOf('@');
    const indexPonto = email.indexOf('.');
  
    if (temArroba && temPonto && indexArroba < indexPonto) {
      return "E-mail válido";
    } else {
      return "E-mail inválido";
    }
  }
  
  // Exemplos de uso:
  console.log(verificarEmail("teste@exemplo.com")); // E-mail válido
  console.log(verificarEmail("teste.exemplo@com")); // E-mail inválido
  console.log(verificarEmail("teste@com"));         // E-mail inválido
  console.log(verificarEmail("teste@.com"));        // E-mail inválido
  