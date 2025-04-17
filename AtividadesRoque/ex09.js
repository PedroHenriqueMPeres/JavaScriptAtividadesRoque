function ehPalindromo(palavra) {
    const invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
  }
  
  // Exemplos de uso:
  console.log(ehPalindromo("radar"));    // true
  console.log(ehPalindromo("banana"));   // false
  