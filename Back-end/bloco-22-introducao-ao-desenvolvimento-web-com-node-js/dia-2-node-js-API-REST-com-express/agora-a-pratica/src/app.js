const express = require('express');
const movies = require('./movies.json')
const writeJson = require('./utils/writeJson')

const app = express();
app.use(express.json())
app.get('/movies', (_req, res) => {
  res.status(200).json(movies);
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

app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const newArray = movies.filter((movie) => movie.id === Number(id)).splice().concat({id,...req.body});
  console.log({...movies, newArray})
  // writeJson(newArray)
  res.status(200).json(newArray);
})

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const newArray = movies.filter((movie) => movie.id !== Number(id));
  writeJson(newArray)
  res.status(204).end;
});

module.exports = app;