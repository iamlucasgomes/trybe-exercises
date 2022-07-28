// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest.


const sum = ((...par) =>  par.reduce((acc, cur) => (acc + cur), 0));

console.log(sum(1,2,3,4,5,6,7,8,9))