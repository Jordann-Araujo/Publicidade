class Dao {

    constructor (model) {
        this.model = model
        //o model seria os modelos sequilize (Empresa, Usuario, Influencer...)
    }

    async criar (objeto) {
      try{
        let empresa = await this.model.create(objeto);
        console.log(empresa);
      } catch {
          console.log("Algo de errado não está certo")
      }
    }

    async ler () {
        try {
            let empresa = await this.model.findAll();
            console.log(empresa);
        } catch {
            console.log("Algo de errado não está certo")
        }
      }

    async atualizar (id, objetoAtualizado) {
        try {
            let objeto = await this.model.findByPk(id)
            await objeto.update(objetoAtualizado)
        } catch {
            console.log("Algo de errado não está certo")
        }
      }

    async delete (id) {
        try {
            const object = await this.model.findByPk(id);
            let empresa= await object.destroy();
            console.log (empresa);
        } catch {
            console.log("Algo de errado não está certo")
        }
      }
}

module.exports = Dao

