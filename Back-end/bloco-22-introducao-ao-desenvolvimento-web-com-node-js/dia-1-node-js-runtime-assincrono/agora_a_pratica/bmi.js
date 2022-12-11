const readline = require('readline-sync');

/* 
🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa. -OK
🚀 Agora, permita que o código seja executado através do comando npm run bmi. -OK
🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar. -OK
🚀 Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
🚀 Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
🚀 Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.
*/

const BMI = () => {
  const weight = readline.questionInt('What’ your weight?');
  const height = readline.questionFloat('What’ your height?');
  
  console.log((weight / height ** 2).toFixed(2));
};

BMI();
