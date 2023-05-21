const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        // id
        id: {
            // Tipo entero
            type: DataTypes.INTEGER,
            // No nulo
            allowNull: false,
            // Es la PK
            primaryKey: true,
        },
        // email
        email: {
            // Tipo string
            type: DataTypes.STRING,
            // No nulo
            allowNull: false,
            // Es de tipo email
            isEmail: true,
        },
        // password
        password: {
            // Tipo string
            type: DataTypes.STRING,
            // No nulo
            allowNull: false,
        },
    }, { timestamps: false });
};
