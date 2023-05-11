const axios = require('axios');


// Crea una constante llamada URL y guarda lo siguiente
const URL = 'https://rickandmortyapi.com/api/character/';


// Crea una función getCharById y expórtala. Recibe por
// parámetros a los objetos req y res
const getCharById = async (req, res) => {
    // Dentro de la función haz una petición a la API
    // a partir del id que recibes por params
    try {

        const { id } = req.params
        const response = await axios.get(`${URL}${id}`);
        const { status, name, species, origin, image, gender } = response.data;

        return res.json({
            id,
            status,
            name,
            species,
            origin,
            image,
            gender,
        });

        // // VERSIÓN ANTERIOR A TRY / CATCH
        // // En el caso de que todo salga OK y se encuentre a un personaje, devuelve
        // // un JSON con las propiedades:
        // // id, status, name, species, origin, image y gender
        // // if (response.status === 200) {
        // //     return res.json({
        // //         id: response.data.id,
        // //         status: response.data.status,
        // //         name: response.data.name,
        // //         species: response.data.species,
        // //         origin: response.data.origin,
        // //         image: response.data.image,
        // //         gender: response.data.gender,
        // //     });
        // // }

        // // En el caso de que todo salga OK pero no se encuentre a un personaje,
        // // devuelve un mensaje con el error 404 y el mensaje 'Character not found'
        // // if (response.status === 404) {
        // //     return res.status(404).json({
        // //         error: 'Character not found',
        // //     });
        // // }

    } catch (error) {

        return res.status(500).json({
            error: error.message,
        });

    };
    // Si hay un error debes responder con un status 500, y un texto con la
    // propiedad message de error
};


module.exports = getCharById;
