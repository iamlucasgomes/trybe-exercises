// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const ascendingAgeList = people.sort((a,b) => a.age > b.age ? 1 : -1);

console.log(people);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const descendingAgeList = people.sort((a,b) => a.age < b.age ? 1 : -1);

console.log(people);