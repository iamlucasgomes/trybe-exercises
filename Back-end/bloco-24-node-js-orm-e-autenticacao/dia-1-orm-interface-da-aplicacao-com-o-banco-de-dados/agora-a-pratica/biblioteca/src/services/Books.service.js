const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) return { type: 'BOOK_NOT_FOUND' }
  return book;
};

const create = async (title, author, pageQuantity) => {
  const book = await Book.create({
    title,
    author,
    pageQuantity,
  })
  return book;
};

const update = async (id, book) => {
  const validateId = await Book.findByPk(id);
  const bookUpdated = await Book.update(book, {
    where: {
      id,
    }
  })
 if(!validateId) return {type: 'BOOK_NOT_FOUND'};
 return bookUpdated;
};

const remove = async (id) => {
  const bookRemoved = await Book.destroy({
    where: {
      id,
    }
  })
  return bookRemoved;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}