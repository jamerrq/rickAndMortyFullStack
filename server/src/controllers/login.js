// Dentro de tu carpeta controllers, crea un archivo llamado login.js.
// Dentro de esta deberás crear y exportar una función que recibe por
// parámetro los objetos req y res.


module.exports = (req, res) => {
    // Deberás obtener los datos email y password que recibes mediante Query.
    // Una vez hecho esto, importa tu arreglo de usuarios y verifica si dentro
    // de ese arreglo que coincida con el email y password que recibiste.

    const { email, password } = req.query;
    const users = require('../utils/users');
    const user = users.find((user) => user.email === email && user.password === password);

    // console.log(email, password);

    // En el caso de que haya un usuario que cumpla esa condición, entonces
    // debes devolver una respuesta con estatus 200, y en formato JSON,
    // un objeto con la propiedad access: true. Caso contrario, debes devolver
    // lo mismo pero con la propiedad access: false.
    const response = {
        access: user ? true : false,
    };
    return res.status(200).json(response);
};
