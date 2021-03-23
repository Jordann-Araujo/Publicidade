let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Empresa = require("./Empresa");
const Campanha = db.define("Campanha",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        EmpresaId: {
            type: DataTypes.INTEGER,
            references: {
                model: Empresa, 
                key: 'id'
            }
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estatistica: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tempo_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tempo_fim: {
            type: DataTypes.DATE,
            allowNull: false
        },
        valor: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    }
);

module.exports = Campanha;