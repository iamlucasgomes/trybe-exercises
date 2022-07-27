// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(headquarters) {
  return headquarters.reduce((acc, initialValue) => acc.concat(initialValue))
}

console.log(flatten(arrays))