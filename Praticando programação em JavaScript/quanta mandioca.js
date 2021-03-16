/*
Desafio

    O Chico come 300

    O Bento come 1500

    O Bernardo come 600

    A Marina 1000

    A Iara come 150

Marlene por sua vez sempre come 225 gramas de mandioca. Cansada de todo ano ter que calcular quanta mandioca preparar ela te desafiou para escrever um programa que informe quanta mandioca deve ser preparada em gramas.

Entrada

A entrada consiste de 5 inteiros cada um representando as porções que os convidados de dona Chica vão consumir. O primeiro inteiro representa as porções do Chico, o segundo do Bento, o terceiro do Bernardo, o quarto da Marina e o quinto a da Iara.
Saída

A saída consiste de um único inteiro que representa quanta mandioca Marlene deve preparar em gramas.

*/

let chico = 300 * parseInt(gets());
let bento = 1500 * parseInt(gets());
let bernardo = 600 * parseInt(gets());
let marina = 1000 * parseInt(gets());
let iara = 150 * parseInt(gets());
let marlene = 225;
let total = chico + bento + bernardo + marina + iara + marlene; 
console.log(total);