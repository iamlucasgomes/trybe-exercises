const express = require('express');
const { validateIfDescriptionHasAllRequiredKeys,
  validateCreatedAt, validateRating, validateDifficulty } = require(
  '../middlewares/validateDescription.middleware',
);
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
validateIfDescriptionHasAllRequiredKeys,
validateCreatedAt,
validateRating,
validateDifficulty,
(_req, res) => res.status(201)
.json({ message: 'Atividade cadastrada com sucesso!' }),
);

module.exports = router;
