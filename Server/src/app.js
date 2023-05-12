// Express server
const express = require('express');
// Router
const router = require('./routes/index');

// Server
const server = express();


// Agregar middleware.
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

// Crear un middleware que reciba los datos en formato JSON.
server.use(express.json());

// Crear un middleware que agregue el string "/rickandmorty" antes de cada una
// de tus rutas.
server.use('/rickandmorty', router);


module.exports = server;
