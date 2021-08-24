const { Router } = require('express');
const {Restaurant} = require('../db');

const router = Router();

const addRestaurant = router.post('/', async (req, res)=>{
//    const {title, summary, spoonacularScore, healthScore, instructions, diets}=req.body
    console.log('22',req.body)
    const {id , title, city, description, adress, picture} = req.body
    const newRestaurant = { id: id, nombre: title, descripcion: description, ciudad: city, direccion: adress, foto: picture }
    console.log('23',newRestaurant)

    try{
        const createRestaurant= await Restaurant.create(newRestaurant)
        res.send(newRestaurant)
        console.log(createRestaurant)
    }
    catch(err){
        res.send(err)
    }

})




router.get('/', async (req, res)=>{
    try{
         console.log('no llega')
        const get = await Restaurant.findAll();
        console.log(1, get)
        res.send(get)
    }
    catch(err){
        res.send(err)
    }
} )

module.exports = addRestaurant
