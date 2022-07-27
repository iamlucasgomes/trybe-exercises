import { books } from "../dia-4-javascript-es6-higher-order-functions-reduce/books.js";

// Encontre o livro com o maior nome.

function longestNamedBook(bookList) {
  return bookList.reduce((acc, cur) => acc.name.length > cur.name.length ? acc : cur)
}
console.log(longestNamedBook(books))