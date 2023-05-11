// Dentro de tu carpeta controllers crea un archivo con el nombre
// handleFavorites.js. Dentro de este archivo deberás declarar un arreglo vacío

// llamado myFavorites
let myFavorites = [];


// Crea una función llamada postFav que reciba por parámetro los objetos req y
// res.
const postFav = (req, res) => {
    // Agrega en tu arreglo de favoritos el personaje que estás recibiendo
    // por body.
    myFavorites.push(req.body);

    // Finalmente devuelve tu arreglo de favoritos en formato JSON.
    return res.status(200).json(myFavorites);
};


// Crea una función llamada deleteFav que reciba por parámetro los objetos req
// y res.
const deleteFav = (req, res) => {

    // Filtra tus personajes favoritos y devuelve todos menos el que estás
    // recibiendo por body.
    const { id } = req.params;
    const deleteCharacter = myFavorites.filter((character) => {
        return parseInt(character.id) !== parseInt(id);
    });
    myFavorites = deleteCharacter;

    // Finalmente devuelve tu arreglo de favoritos en formato JSON.
    return res.status(200).json(myFavorites);
};


// Exporta ambas funciones
module.exports = {
    postFav,
    deleteFav,
};
