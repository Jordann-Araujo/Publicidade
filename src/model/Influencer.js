let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuario");
const Influencer = db.define("Influencer",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        UsuarioId: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario, 
                key: 'id'
            }
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
        },
        agenda: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }
);

module.exports = Influencer;