const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuario");
const Campanha = require("./Campanha");

const UsuarioCampanha = db.define("UsuarioCampanha",
    {
        UsuarioId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Usuario, 
                key: 'id'
            }
        },
        CampanhaId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Campanha, 
                key: 'id'
            }
        },
        nota: DataTypes.DOUBLE,
        comentario: DataTypes.STRING
    }
);

Usuario.belongsToMany(Campanha, {through:UsuarioCampanha});
Campanha.belongsToMany(Usuario, {through:UsuarioCampanha})
module.exports = UsuarioCampanha;