const readline = require('readline-sync');

/* Crie um código que exiba o valor dos n primeiros elementos da sequência de Fibonacci.

A sequência de Fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.

Armazene o código no arquivo fibonacci.js. -OK
Utilize o readline-sync para realizar o input de dados. -OK
O código deve ser acionado através do comando npm run fibonacci. -OK
Não imprima o valor 0, uma vez que ele não está incluso na sequência. -OK
Quando n = 10, exatamente 10 elementos devem ser exibidos. -OK
Adicione validações para garantir que o valor informado é um inteiro maior que 0. -OK */

const fibonacciSequence = () => {
  const n = readline.questionFloat('Qual o limite de numeros?');

  if (n <= 0) {
    console.error('Insira um numero válido maior que 0');
    return;
  }
  if (!Number.isInteger(n)) {
    console.error('Insira um numero inteiro');
    return;
  }

  const result = [1, 1];
  for (let index = 0; index < n - 2; index += 1) {
    result.push(result.at(-2) + result.at(-1));
  }
  console.log(result);
};

fibonacciSequence();