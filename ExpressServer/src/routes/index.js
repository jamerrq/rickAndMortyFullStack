// Dirígete a la carpeta routes y crea un archivo llamado index.js.
// Dentro de este deberás importar todos tus controladores.
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');


// También deberás importar la función Router de express.
const { Router } = require('express');


// Crea una ruta para cada controlador con los siguientes paths:
//     - GET getCharById: '/character/:id'
//     - GET login: '/login'
//     - POST postFav: '/fav'
//     - DELETE deleteFav: '/fav/:id'

const router = Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav/', postFav);
router.delete('/fav/:id', deleteFav);


// Finalmente exporta tu router.
module.exports = router;
