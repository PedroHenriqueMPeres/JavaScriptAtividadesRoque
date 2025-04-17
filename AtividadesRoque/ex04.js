function gerarSenha() {
    const comprimento = 10;
    const caracteres = [];
  
    // Faixas de códigos:
    // Números: 48-57
    // Letras maiúsculas: 65-90
    // Letras minúsculas: 97-122
    // Símbolos comuns: 33-47, 58-64, 91-96, 123-126
  
    function gerarCaractereAleatorio() {
      const faixas = [
        [48, 57],   // Números
        [65, 90],   // Letras maiúsculas
        [97, 122],  // Letras minúsculas
        [33, 47], [58, 64], [91, 96], [123, 126] // Símbolos
      ];
      
      // Escolhe uma faixa aleatória
      const faixa = faixas[Math.floor(Math.random() * faixas.length)];
      
      // Gera um código dentro da faixa
      const codigo = Math.floor(Math.random() * (faixa[1] - faixa[0] + 1)) + faixa[0];
      
      return String.fromCharCode(codigo);
    }
  
    for (let i = 0; i < comprimento; i++) {
      caracteres.push(gerarCaractereAleatorio());
    }
  
    return caracteres.join('');
  }
  
  // Exemplo de uso:
  console.log(gerarSenha());
  