//importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos unq constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;

//Empleamos las rutas
let pintoresRouter = require('./routes/pintor');

//sitio web
const app = express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));



//vamos a decirle a express la ruta a usar
app.use('/', pintoresRouter);

/*La conexión con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://tony:1234567891011@cbtis122-e-0wkyz.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión establecida :D');
    })
    .catch(err => console.log(err));
/* Arrancar servidor web*/
app.listen(PUERTO,()=>{
    console.log('Escuchando el puerto...');
})
