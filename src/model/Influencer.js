let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Influencer = db.define("Influencer",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
        },
        agenda_dia: {
            type: DataTypes.DATE,
            allowNull: false
        },
        agenda_hora: {
            type: DataTypes.TIME,
            allowNull: false
        },
        qnt_seguidores: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        interacao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nicho: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Influencer;