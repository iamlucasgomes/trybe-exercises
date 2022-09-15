// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(palavra) {
  let palavra2 = '';

  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    palavra2 += palavra[index]
  } if(palavra2 === palavra){
      return true;
    } else {
      return false;
    }
}

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function highestIndex(arrayInt){
  let maior = 0;
  let maiorIndice;
  for(let index = 0; index < arrayInt.length; index += 1){
    
    if(arrayInt[index] > maior){
      maior = arrayInt[index]
    } if(maior === arrayInt[index]){
      maiorIndice = arrayInt.indexOf(maior)
    }
 } return maiorIndice;
}

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowestIndex(arrayInt){
  let menor = arrayInt[0];
  let menorIndice;
  for(let index = 0; index < arrayInt.length; index += 1){
    
    if(arrayInt[index] < menor){
      menor = arrayInt[index]
    }
    if(menor === arrayInt[index]){
      menorIndice = arrayInt.indexOf(menor)
    }
 } return menorIndice;
  
}

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function amountOfCharacters(names) {
  let maiorNome = names[0];
  for (let count = 0; count < names.length; count += 1) {
    if (names[count].length > maiorNome.length) {
      maiorNome = names[count];
    }
  }

  return maiorNome;
}

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function moreIsRepeated(array) {
  let contadores = {};
array.forEach((contador) => {
  contadores[contador] = (contadores[contador] || 0) + 1 
}); 
  const valorMaior = Math.max(...Object.values(contadores));
  const numero = Object.keys(contadores).find((key) => contadores[key] === valorMaior);
return `O Número que mais se repete é o: ${numero}`;
}

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumAllNumbers(n){
  let sum = n;
  let erro = "Insira um Numero Maior que 0"
  if(n <= 0){
    return erro;
  }
  for(let count = 1; count < n; count += 1){
    sum += count
  } return `O somatorio de ${n} é: ${sum}`;
}

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function checkFinalWord(word, final){
	if(word.endsWith(final)){
    return `A palavra ${word} termina com ${final}`
  } else{
    return `A palavra ${word} não termina com ${final}`
  }
}
