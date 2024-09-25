/* Suponha que voce trabalhe em um laboratório e seu
colega mediu a temperatura de um objeto em Fahrenheit.
Escreva um programa capaz de converter em Celsius. */

function converterParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


console.log(converterParaCelsius(98.6));
