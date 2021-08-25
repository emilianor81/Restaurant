const { Router } = require('express');
const {Restaurant} = require('../db');

const router = Router();

const addRestaurant = router.post('/', async (req, res)=>{
//    const {title, summary, spoonacularScore, healthScore, instructions, diets}=req.body
    const {title, city, description, adress, picture} = req.body
    const newRestaurant = { nombre: title, descripcion: description, ciudad: city, direccion: adress, foto: picture }

    try{
        const createRestaurant= await Restaurant.create(newRestaurant)
        res.send(newRestaurant)
    }
    catch(err){
        res.send(err)
    }

})




router.get('/', async (req, res)=>{
    try{
        const get = await Restaurant.findAll();
        res.send(get)
    }
    catch(err){
        res.send(err)
    }
} )

module.exports = addRestaurant
