      // //crie um algoritmo que retorne o fatorial de 10.

// let total = 1;
// let numero = 4
// for(let index = numero;index >= 1; index-=1){
//   total *= index ;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = 1;

// for(let index = array[array.length-1]; index > array[0];index -= 1){
//  total *= index
// }
// console.log(total)

// array[array.length-1]

// // 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let fruta = "banana";
// let frutaContrario ="";
// for(let index = fruta.length-1; index >= 0;index -= 1){
//   frutaContrario += fruta[index]
// }
// console.log(frutaContrario)

// // 3- Considere o array de strings abaixo:
// // Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = array[1];
// let menor = array[1];

// for(let a = 0; a < array.length; a += 1){
//  if(array[a].length > maior.length){
//    maior = array[a]
//  }
//   if(array[a].length < menor.length){
//     menor = array[a]
//   }
// }

// console.log("a maior palavra é " + maior)
// console.log("a menor palavra é " + menor)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let numberOfDivisors = 0;
let isCousin = [];
for (let himself = 0; himself < num.length; himself += 1) {
  for (let divisors = 0; divisors < num.length; divisors += 1) {
    if(num[divisors] % divisors === 0){
      numberOfDivisors += 1
    }
      if(numberOfDivisors === 2){
    isCousin.push(num)
    }
  }
}