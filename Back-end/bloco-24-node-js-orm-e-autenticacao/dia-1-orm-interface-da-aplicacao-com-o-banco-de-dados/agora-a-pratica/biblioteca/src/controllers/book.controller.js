const BooksService = require('../services/Books.service');

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BooksService.getById(id);
  !book.type ? res.status(200).json(book) : res.status(404).json({ message: "Book not found" });
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BooksService.create(title, author, pageQuantity);
  return res.status(201).json(newBook);
};

const update = async (req, res) => {
  const { id } = req.params;
  const bookUpdated = await BooksService.update(id, req.body);
  console.log(bookUpdated);
  !bookUpdated.type ? res.status(200).json({ message: 'Book updated' }) : res.status(404).json({ message: "Book not found" })
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await BooksService.remove(id);
    return res.sendStatus(204);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};