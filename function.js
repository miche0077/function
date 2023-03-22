//1) Observe o trecho de código abaixo:

/* int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA); */
let indice = 13;
let soma = 0;
let k = 0;
while(k < indice){
    k++;
    soma =+ k;
}
console.log(soma)

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

let numA = 0;
let numB = 1
let numC = 0;
let fib = ''
fib += numA + ' '+ numB
for(let count = 1; count <= 10; count++){
    numC = numA + numB
    fib += ' ' + numC
    numA = numB
    numB = numC
}
console.log(fib)

/*3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, 9, 11, 13 ,15

b) 2, 4, 8, 16, 32, 64, 128, 256

c) 0, 1, 4, 9, 16, 25, 36, 49, 64

d) 4, 16, 36, 64, 100, 144, 196

e) 1, 1, 2, 3, 5, 8, 13, 21, 34

f) 2,10, 12, 16, 17, 18, 19, 200, 201, 202*/

/*

5) Escreva um programa que inverta os caracteres de um string.



IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/
function invertir(str){
    let newString = '', i = str.length - 1;
    for(i; i >= 0; i--){
        newString += str[i];
    }
    return newString
}
console.log(invertir('michelle'))