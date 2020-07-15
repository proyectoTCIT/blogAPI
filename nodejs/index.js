//Se inicia express en var app
const express = require('express');
const app = express();
//morgan usado para saber que peticion viene del cliente
const morgan = require('morgan');
//exportamos la base de datos
const pool = require('./dbpostgres');
//
const cors = require('cors')

//Setting
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())


//routes
app.use('/api', require('./rutas/postRouter'));


app.listen(app.get('port'), () => {
    console.log("Server conectado en el port ", app.get('port'));
});