// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

// const factorial = (n) => {
//   let numero = 1;
//   for (let index = n; index >= 1; index -= 1) {
//     numero *= index;
//   }
//   return numero;
// }

// console.log(factorial(4));


// Crie uma função que receba uma frase e retorne a maior palavra.


const longestWord = (string) => {
  const words = []
words.push(string.split(' '));
  let biggest = words[0][0];
for(let index = 0; index < words[0].length; index += 1){
  if(biggest.length < words[0][index].length){
    biggest = words[0][index];
  }
}
  return biggest
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 🚀 Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.