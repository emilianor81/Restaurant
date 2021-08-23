const { Router } = require('express');
// const RecipeRoutes = require('./recipe')
// const DietRoutes = require('./diet')
const Restaurants = require('./restaurants.js');

const router = Router();

// router.use('/');

router.use('/restaurant',Restaurants)
// router.use('/types',DietRoutes);
// router.use('/recipe',RecipeRoutes);


module.exports = router;