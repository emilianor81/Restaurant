const { Router } = require('express');
// const RecipeRoutes = require('./recipe')
// const DietRoutes = require('./diet')
const Restaurants = require('./restaurants.js');
const Mesa = require('./mesa.js');

const router = Router();

// router.use('/');

router.use('/restaurant',Restaurants)
router.use('/reserva',Mesa)
// router.use('/types',DietRoutes);
// router.use('/recipe',RecipeRoutes);


module.exports = router;