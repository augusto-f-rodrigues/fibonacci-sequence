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
