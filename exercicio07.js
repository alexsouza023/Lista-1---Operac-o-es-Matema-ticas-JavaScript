/* Escreva um programa que receba quatro notas de um
aluno e calcule a média aritmética dessas notas. */


function calcularMedia(nota1, nota2, nota3, nota4) {
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}


console.log(calcularMedia(7, 8, 9, 10));
