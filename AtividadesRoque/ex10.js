function palavraMaisRepetida() {
    const frase = prompt("Digite uma frase:");
    const palavras = frase.toLowerCase().split(' ');
  
    const contagem = palavras.reduce((contador, palavra) => {
      contador[palavra] = (contador[palavra] || 0) + 1;
      return contador;
    }, {});
  
    let maisRepetida = '';
    let max = 0;
  
    for (let palavra in contagem) {
      if (contagem[palavra] > max) {
        max = contagem[palavra];
        maisRepetida = palavra;
      }
    }
  
    console.log(`Palavra mais repetida: "${maisRepetida}" (${max}x)`);
    return maisRepetida;
  }
  
  // Exemplo de uso:
  palavraMaisRepetida();
  