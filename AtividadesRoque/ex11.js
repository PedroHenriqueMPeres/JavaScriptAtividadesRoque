function formatarEmReal(valor) {
    const formatado = 'R$ ' + valor.toFixed(2).replace('.', ',');
    return formatado;
  }
  
  // Exemplos de uso:
  console.log(formatarEmReal(10.5));    // R$ 10,50
  console.log(formatarEmReal(199));     // R$ 199,00
  console.log(formatarEmReal(3.1416));  // R$ 3,14
  