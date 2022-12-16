const express = require('express');
const movies = require('./movies.json')
const writeJson = require('./utils/writeJson')
const fs = require('fs').promises;
const path = require('path')


const app = express();
app.use(express.json())

app.get('/movies', (_req, res) => {
  res.status(200).json(movies);
})

app.get('/movies/search', (req, res) => {
  const { q } = req.query;
  const newArray = movies.filter((movie) => movie.movie.toLowerCase().includes(q.toLowerCase()))
  if(!newArray) { return res.status(200).json('[]');  }
  return res.status(200).json(newArray);
  
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const data = movies.filter((movie) => movie.id === Number(id))
  res.status(200).json(data)
});

app.post('/movies', (req, res) => {
  const newArray = [...movies, { id: movies.length + 1, ...req.body }]
  writeJson(newArray)
  res.status(200).json(newArray)
})

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(path.resolve(__dirname, './movies.json'), updatedMovies);
    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const newArray = movies.filter((movie) => movie.id !== Number(id));
  writeJson(newArray)
  res.status(204).end;
});

module.exports = app;