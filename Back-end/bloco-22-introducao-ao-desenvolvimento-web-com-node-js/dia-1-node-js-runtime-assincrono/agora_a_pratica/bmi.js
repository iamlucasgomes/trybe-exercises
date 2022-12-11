const readline = require('readline-sync');

/* 
🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa. -OK
🚀 Agora, permita que o código seja executado através do comando npm run bmi. -OK
🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar. -OK
🚀 Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
🚀 Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.
*/

const BMI = () => {
  const weight = readline.question('What’ your weight?');
  const height = readline.question('What’ your height?');
  
  console.log((weight / height ** 2).toFixed(2));
};

BMI();
