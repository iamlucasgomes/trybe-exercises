const express = require('express');
const { validateTeam } = require('./middlewares/validateTeam');

const app = express();
const teamsId = '/teams/:id';

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some((team) => team.id === id)) {
    next();
  } else {
    res.status(400).json({ message: 'id não encontrado!' });
  }
};

app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

app.get(teamsId, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put(teamsId, validateTeam, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
});

app.delete(teamsId, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;