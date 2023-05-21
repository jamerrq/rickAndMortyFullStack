// Sync sequelize
const { conn, User, Favorite } = require('./DB_connection');
conn.sync({ force: false }).then(() => {
    console.log('DB connected');
});
User.sync({ force: false }).then(() => {
    console.log('User model connected');
});
Favorite.sync({ force: false }).then(() => {
    console.log('Favorite model connected');
});


// Bring server from app.js
const server = require('./app');

// Port
const PORT = 3001;

// Listen server
server.listen(PORT, () => {
    console.log(`Server raised on port ${PORT}`);
});
