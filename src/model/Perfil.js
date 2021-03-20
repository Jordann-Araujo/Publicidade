let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Perfil = db.define("Perfil",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        rede_social: {
            type: DataTypes.STRING,
            allowNull: false
        },
        qnt_seguidores: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nicho: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interacao_curtidas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interacao_comentarios: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interacao_visualizacao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Perfil;