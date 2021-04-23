try{
    const Usuario = require('./model/Usuario.js')
    const Dao = require("./service/DAO")

    let usuario = new Dao(Usuario)
    usuario.delete(1)
} catch (e) {
    console.log(e.message)
}

try{
    const daoEmpresa = require('./service/DAOEmpresa')
    daoEmpresa.ler()
} catch (e) {
    console.log(e.message)
}
