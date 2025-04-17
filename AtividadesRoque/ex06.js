    var prompt = require('prompt-sync')();
    const frase = prompt("Digite uma frase:");
    
    function palavra() {
  
    
    const resultado = frase
      .split(' ') // separa por espaço
      .map(frase => 
        frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase()
      )
      .join(' ');
  
    
    return resultado;
    
  }
  console.log(palavra());