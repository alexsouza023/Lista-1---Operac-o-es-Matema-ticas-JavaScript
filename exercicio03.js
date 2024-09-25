/*  Escreva uma calculadora que receba um valor em reais e
converta para dólar. Considere o valor do dólar a R$5,25.*/


function converterParaDolar(valorReais) {
    const valorDolar = 5.25;
    return valorReais / valorDolar;
}

console.log(converterParaDolar(52.5));
