let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(let goThrough = 0; goThrough < numbers.length; goThrough += 1){
  console.log(numbers[goThrough]);
}

//  Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let resultado = 0;
for(let sum = 0; sum < numbers.length; sum += 1){
  resultado += numbers[sum]
}console.log(resultado)

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma = 0;
let media;

for(let iterate = 0; iterate < numbers.length; iterate += 1){
  soma += numbers[iterate]
  media = soma / numbers.length;
} console.log(media)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let soma = 0;
let media;

for(let iterate = 0; iterate < numbers.length; iterate += 1){
  soma += numbers[iterate]
  media = soma / numbers.length;
}
if(media > 20){
  console.log("valor maior que 20")
} else {
  "valor menor ou igual a 20";
}

//  Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i] > maior){
    maior = numbers[i]
  }
} console.log(maior)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = 0;

for (let a = 0; a < numbers.length; a += 1) {
  if (numbers[a] % 2 === 1) {
    impares += 1;
  } 
} if(impares === 0){
  console.log("nenhum valor ímpar encontrado")
} else {
  console.log(impares)
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for(let b = 0; b < numbers.length; b += 1){
  if(numbers[b] < menor){
    menor = numbers[b]
  }
}
console.log(menor)

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let novoArr = [];

for(let index = 1; index <= 25; index += 1){
  novoArr.push(index)
} 
console.log(novoArr)

for(let z = 0; z < novoArr.length; z += 1){
  console.log(novoArr[z] / 2)
} 

