const mongoose = require('mongoose');
//vamos a crear un esquema (nuestra base de datos)

let Schema = mongoose.Schema;

//crear la colección

let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true,'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true,'Requerimos la corriente']
    },
    nacionalidad:{
        type: String 
    },
    pintura:{
        type: String
    },
    nompin:{
        type: String,
        required: [true,'Requerimos el nombre de la pintura']
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);
