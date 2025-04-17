function formatarData(data) {
    const partes = data.split('-'); // Divide a data em [ano, mês, dia]
    return partes.reverse().join('/'); // Inverte a ordem e junta com "/"
  }
  
  // Exemplo de uso:
  const dataOriginal = "2025-04-15";
  const dataFormatada = formatarData(dataOriginal);
  console.log(dataFormatada); // Saída: "15/04/2025"
  