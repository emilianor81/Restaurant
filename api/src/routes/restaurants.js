const { Router } = require('express');
const router = Router();

const addRestaurant = router.post('/', (req, res)=>{
//    const {title, summary, spoonacularScore, healthScore, instructions, diets}=req.body
    console.log(req.body)
})




// router.get('/restaurants', )

module.exports = addRestaurant
