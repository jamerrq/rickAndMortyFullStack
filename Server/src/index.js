const express = require('express');
// Dirígete al archivo index.js en el que tienes tu servidor. Aquí deberás:
// Importar tu router.
const router = require('./routes/index');


const server = express();
const PORT = 3001;


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

server.listen(PORT, () => {
    console.log(`Server raised on port ${PORT}`);
});
