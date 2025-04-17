function sortearNome() {
    const entrada = prompt("Digite os nomes separados por vírgula:");
    const nomes = entrada.split(',').map(nome => nome.trim()); // remove espaços extras
  
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];
  
    console.log(`Nome sorteado: ${nomeSorteado}`);
    return nomeSorteado;
  }
  
  // Exemplo de uso:
  sortearNome();
  