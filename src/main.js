const db = require('./db')
const Usuario = require('./model/Usuario')
const Dao = require('./service/DAO')

let dao = new Dao(Usuario)
/*let usuario = {
    id: 123,
    nome: "Fulaninho",
    end_estado: "PB"
}*/

dao.ler(1)