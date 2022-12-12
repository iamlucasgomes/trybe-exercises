const readline = require('readline-sync');

/* 
🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa. -OK
🚀 Agora, permita que o código seja executado através do comando npm run bmi. -OK
🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar. -OK
🚀 Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado. -OK
🚀 Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra: -OK
*/

const situation = {
  thinness: {
    imcMin: 0,
    imcMax: 18.5,
    message: 'você esta abaixo do peso ideal',
  },
  ideal: {
    imcMin: 18.6,
    imcMax: 24.9,
    message: 'você esta no peso ideal',
  },
  overweight: {
    imcMin: 25,
    imcMax: 29.9,
    message: 'você esta acima do peso',
  },
  obesity1: {
    imcMin: 30,
    imcMax: 34.9,
    message: 'você esta com Obesidade Grau 1',
  },
  obesity2: {
    imcMin: 35,
    imcMax: 39.9,
    message: 'você esta com Obesidade Grau 2',
  },
  obesity3And4: {
    imcMin: 40,
    message: 'você esta com Obesidade Grau 3 e 4',
  },
};

const BMI = () => {
const weight = readline.questionInt('What’ your weight?');
const height = readline.questionFloat('What’ your height?');
const IMC = (weight / height ** 2).toFixed(2);
const messages = Object.keys(situation);

const searchImc = messages.find((status) => {
  const { imcMin, imcMax } = situation[status];

  return IMC >= imcMin && IMC <= imcMax;
});

console.log(`Seu IMC é ${IMC}, ${situation[searchImc].message}`);
};

BMI();