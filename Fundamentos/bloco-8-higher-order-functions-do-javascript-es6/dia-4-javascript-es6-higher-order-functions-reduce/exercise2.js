import { books } from "../dia-4-javascript-es6-higher-order-functions-reduce/books.js";

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames(bookList) {
  return bookList.map((book) => book.author.name).reduce((acc, cur) => `${acc}, ${cur}`);
}

console.log(typeof reduceNames(books));
