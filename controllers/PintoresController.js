let mongoose = require('mongoose');
//vamos a unirlo al modelo
let Pintores = require('../models/Pintores');

let PintoresController = {};

/*LISTAR -> FIND()*/
PintoresController.list = (req, res)=>{
    Pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err,pintor)=>{
        if(err){
            console.log('Error: ',err);
        }
        res.render('../views/index',{
            pintores: pintor,
            title: "Listado De Pintores",
            year: new Date().getDate()
        })
    })

};
module.exports = PintoresController;
