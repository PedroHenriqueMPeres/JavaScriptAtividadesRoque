// Crie um array de objetos com produtos e preços. Exiba no console o
// nome e o preço com R$ formatado.

    let obj = [
        {Produto:"Caneta", preço: 2.50},
        {Produto:"Caderno", preço: 15.00}
    ];
    
    obj.forEach(obj => {
        console.log(obj.Produto +": R$ "+ obj.preço)
    });