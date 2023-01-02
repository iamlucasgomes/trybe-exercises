const express = require('express');
const { validateIfNameExists,
  validateNameSize } = require('../middlewares/validateName.middleware');
const { validateIfPriceExists,
  validatePriceGreaterThanOrEqualToZero } = require('../middlewares/validatePrice.middleware');

const router = express.Router();

router.post(
'/activities', 
validateIfNameExists,
validateNameSize, 
validateIfPriceExists, 
validatePriceGreaterThanOrEqualToZero, 
(_req, res) => res.status(201)
.json({ message: 'Atividade cadastrada com sucesso!' }),
);

module.exports = router;
