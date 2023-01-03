const validateIfPriceExists = (req, res, next) => {
  const requiredProperties = ['price'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.status(400).json({ message: 'O campo price é obrigatório' });
  }
};

const validatePriceGreaterThanOrEqualToZero = (req, res, next) => {
  if (req.body.price >= 0) {
    next();
  } else {
    res.status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }
};

module.exports = {
  validateIfPriceExists, validatePriceGreaterThanOrEqualToZero,
};