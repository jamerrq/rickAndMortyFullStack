const http = require('http');
const data = require('./utils/data')


const PORT = 3001;
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('rickandmorty/character')) {
        let id = req.url.split('/').at(-1);
        let character = data.find(character => character.id === Number(id));
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(character));
    }
}).listen(PORT, console.log(`port on ${PORT}`));
