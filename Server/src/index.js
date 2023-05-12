// Bring server from app.js
const server = require('./app');

// Port
const PORT = 3001;

// Listen server
server.listen(PORT, () => {
    console.log(`Server raised on port ${PORT}`);
});
