const moment = require('moment');

const validateIfDescriptionHasAllRequiredKeys = (req, res, next) => {
  const { description } = req.body;
  if (!description) { res.status(400).json({ message: 'O campo description é obrigatório' }); }
  if (!description.rating) { res.status(400).json({ message: 'O campo rating é obrigatório' }); }
  if (!description.difficulty) {
 res.status(400)
    .json({ message: 'O campo difficulty é obrigatório' }); 
}
  if (!description.createdAt) {
 res.status(400)
    .json({ message: 'O campo createdAt é obrigatório' }); 
}
  next();
};

const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;
  if (moment(createdAt, 'DD/MM/YYYY', true).isValid()) {
    next();
  } else {
    res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
};

const validateRating = (req, res, next) => {
  const { rating } = req.body.description;
  if ([1, 2, 3, 4, 5].includes(Number(rating))) {
    next();
  } else {
    res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
};

const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  if (['Fácil', 'Médio', 'Difícil'].includes(difficulty)) {
    next();
  } else {
    res.status(400)
    .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
};

module.exports = {
  validateIfDescriptionHasAllRequiredKeys,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
};