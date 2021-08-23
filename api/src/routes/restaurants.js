const { Router } = require('express');
const {Restaurant} = require('../db');

const router = Router();
let id =1
const addRestaurant = router.post('/', async (req, res)=>{
//    const {title, summary, spoonacularScore, healthScore, instructions, diets}=req.body
    console.log(req.body)
    const {title, city, description, adress, picture} = req.body
    const newRestaurant = { nombre: title, descripcion: description, ciudad: city, direccion: adress, foto: picture, id: id++ }
    try{
        const createRestaurant= await Restaurant.create(newRestaurant)
        res.send(newRestaurant)
    }
    catch(err){
        res.send(err)
    }

})




// router.get('/restaurants', )

module.exports = addRestaurant
