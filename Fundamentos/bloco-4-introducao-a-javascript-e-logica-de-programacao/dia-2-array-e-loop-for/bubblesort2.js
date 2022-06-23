// Ordene o array numbers em ordem decrescente e imprima seus valores;
//utlizando bubble sorts

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let auxiliar;
for(let a = 1; a < numbers.length; a += 1){
  for(let b = 0; b < numbers.length; b += 1){
    if(numbers[b] < numbers[b + 1]){
      auxiliar = numbers[b];
      numbers[b] = numbers[b + 1];
      numbers[b+1] = auxiliar;
    }
  } 
} console.log(numbers)