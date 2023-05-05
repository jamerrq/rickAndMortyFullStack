const axios = require('axios');


const getCharById = (res, id) => {
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    axios(url).then((response) => {
        return response.data;
    }).then((data) => {
        // console.log(data);
        let character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            status: data.status,
            image: data.image,
            origin: data.origin,
        };
        // console.log(character);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(character));
    }).catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
        console.log(error);
    });
};


module.exports = getCharById;
