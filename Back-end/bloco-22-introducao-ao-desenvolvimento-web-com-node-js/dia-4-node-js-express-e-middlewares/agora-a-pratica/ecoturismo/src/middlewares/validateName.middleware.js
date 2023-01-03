const validateIfNameExists = (req, res, next) => {
  const requiredProperties = ['name'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.status(400).json({ message: 'O campo name é obrigatório' });
  }
};

const validateNameSize = (req, res, next) => {
  if (req.body.name.length > 4) {
    next();
  } else {
    res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
};

module.exports = {
  validateIfNameExists,
  validateNameSize,
};