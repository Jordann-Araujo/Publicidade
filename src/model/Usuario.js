let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Usuario = db.define("Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        end_estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        end_cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        end_bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conta_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conta_usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conta_senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Usuario;