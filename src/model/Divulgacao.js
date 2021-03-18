let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Divulgacao = db.define("Divulgacao",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        plataforma: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        estatisticas: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Divulgacao;