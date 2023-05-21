const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorite', {
        // id
        id: {
            // Tipo entero
            type: DataTypes.INTEGER,
            // No nulo
            allowNull: false,
            // Es la PK
            primaryKey: true,
        },
        // name
        name: {
            // Tipo string
            type: DataTypes.STRING,
            // No nulo
            allowNull: false,
        },
        // status
        status: {
            // dataType: Enum (Alive - Dead - unknown)
            type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
            // No nulo
            allowNull: false,
        },
        // species
        species: {
            // Tipo string
            type: DataTypes.STRING,
            // No nulo
            allowNull: false,
        },
        // gender
        gender: {
            // dataType: Enum (Female - Male - Genderless - unknown)
            type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
            // No nulo
            allowNull: false,
        },
        // origin
        origin: {
            // Tipo string
            type: DataTypes.STRING,
            // No nulo
            allowNull: false,
        },
        // image
        image: {
            // Tipo string
            type: DataTypes.STRING,
            // No nulo
            allowNull: false,
        },
    }, { timestamps: false });
};
