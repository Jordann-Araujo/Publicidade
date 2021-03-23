const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuario");
const Empresa = require("./Empresa");

const UsuarioEmpresa = db.define("UsuarioEmpresa",
    {
        UsuarioId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Usuario, 
                key: 'id'
            }
        },
        EmpresaId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Empresa, 
                key: 'id'
            }
        },
        nota: DataTypes.DOUBLE
    }
);

Usuario.belongsToMany(Empresa, {through:UsuarioEmpresa});
Empresa.belongsToMany(Usuario, {through:UsuarioEmpresa})
module.exports = UsuarioEmpresa;