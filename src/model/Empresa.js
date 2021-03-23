let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuario");
const Empresa = db.define("Empresa",
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
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classificacao: {
            type: DataTypes.NUMBER,
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
        },
        agenda: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }
);

module.exports = Empresa;