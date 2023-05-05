const http = require('http');
// const data = require('./utils/data');
const getCharById = require('./controllers/getCharById');


const PORT = 3001;
const server = http.createServer((req, res) => {

    // To allow front end to access the server
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Petición válida
    if (req.url.includes('rickandmorty/character')) {
        let id = req.url.split('/').at(-1);
        getCharById(res, id);
        // console.log('Sent petition to getCharById');
    }
}).listen(PORT, console.log(`port on ${PORT}`));
