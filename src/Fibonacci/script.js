/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

'use strict';

const inputNumber = document.querySelector('input');
const spanResult = document.querySelector('.result');

// Some numbers of fibonacci sequence:
// 1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584….

function fibonacciSequence() {
  let val = Number(inputNumber.value);
  let n1 = 0,
    n2 = 1,
    nextTerm;

  if (val <= 3) {
    return (spanResult.textContent = `Pertence a sequência Fibonacci 🎉`);
  }

  nextTerm = n1 + n2;

  while (nextTerm < val) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    nextTerm == val
      ? (spanResult.textContent = `Pertence a sequência Fibonacci 🎉`)
      : (spanResult.textContent = `Não pertence a sequência Fibonacci 😭`);
  }
}
