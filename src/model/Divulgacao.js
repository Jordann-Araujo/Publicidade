let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Influencer = require("./Influencer");
const Divulgacao = db.define("Divulgacao",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        InfluencerId: {
            type: DataTypes.INTEGER,
            references: {
                model: Influencer, 
                key: 'id'
            }
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