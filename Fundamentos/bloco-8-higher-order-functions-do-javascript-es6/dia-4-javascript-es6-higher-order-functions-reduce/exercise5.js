// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(name) {
const reduce = name.reduce((acc, cur) => (acc + cur))
return reduce.split('').reduce((acc, cur) => {
  cur === 'a'||cur ===  'A' ? acc += 1: 0
return acc}, 0)
}

console.log(containsA(names))

