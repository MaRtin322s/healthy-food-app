const router = require('express').Router();
const authController = require('./controllers/authController');
const recipeController = require('./controllers/recipeContreoller');
const productsController = require('./controllers/productionController');

router.use('/users', authController);
router.use('/recipes', recipeController);
router.use('/products', productsController);

module.exports = router;