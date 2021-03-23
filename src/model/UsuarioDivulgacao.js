const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuario");
const Divulgacao = require("./Divulgacao");

const UsuarioDivulgacao = db.define("UsuarioDivulgacao",
    {
        UsuarioId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Usuario, 
                key: 'id'
            }
        },
        DivulgacaoId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Divulgacao, 
                key: 'id'
            }
        },
        nota: DataTypes.DOUBLE,
        comentario: DataTypes.STRING
    }
);

Usuario.belongsToMany(Divulgacao, {through:UsuarioDivulgacao});
Divulgacao.belongsToMany(Usuario, {through:UsuarioDivulgacao})
module.exports = UsuarioDivulgacao;