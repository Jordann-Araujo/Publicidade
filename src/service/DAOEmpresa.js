const Empresa = require('../model/Empresa')

var daoEmpresa = {
    criar: async function(objeto){
        try {
            let empresa = await Empresa.create(objeto);
            console.log(empresa);
    } catch {
        console.log("Errei, mas foi sem querer")
    }
  
    }, 
    ler: async function(){
        try {
            let empresa = await Empresa.findAll(id);
            console.log(empresa);
    } catch {
        console.log("Errei, mas foi sem querer")
    }
    },
    atualizar: async function(id){
        try {
        const objeto = await Empresa.findByPk(id);
        await objeto.update(objetoAtualizado)
    } catch {
        console.log("Errei, mas foi sem querer")
    }
        },
    deletar: async function(id){
        try {
            const object = await Empresa.findByPk(id);
            let empresa= await object.destroy();
            console.log (empresa);
    } catch {
        console.log("Errei, mas foi sem querer")
    }
}
}

module.exports = daoEmpresa
