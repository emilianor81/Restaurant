const { Router } = require('express');
const {Mesa} = require('../db');

const router = Router();

const addMesa = router.post('/', async (req, res)=>{
    let date = req.body[0].split('T')[0].split(' ')[0]
    let id = req.body[1]
    const newMesa = { fecha: date, restaurantId: id }
    try{
        const find = await Mesa.findOne({where:{fecha:date}})
        if (find){
            await find.update({
                ...find, disponible: find.disponible-1
            })
        }else{
            newMesa.disponible=14
            
        const createMesa= await Mesa.create(newMesa)
        res.send(createMesa)
        }
    }
    catch(err){
        res.send(err)
    }

})

router.get('/', async (req, res)=>{
    try{
        const get = await Mesa.findAll({where:{restaurantId:req.query.id}});
        res.send(get)
    }
    catch(err){
        res.send(err)
    }
} )


module.exports = addMesa