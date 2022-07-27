import { books } from "../dia-4-javascript-es6-higher-order-functions-reduce/books.js";

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge(bookList) {
  const arrayYear =  bookList.map((book) => book.releaseYear - book.author.birthYear)
  const sum = arrayYear.reduce((total, year) => (total + year))
  return sum / arrayYear.length
}

console.log(averageAge(books))