class Dao {

    constructor (model) {
        this.model = model
        //o model seria os modelos sequilize (Empresa, Usuario, Influencer...)
    }

    async criar (objeto) {
      let empresa = await this.model.create(objeto);
      console.log(empresa);
    }

    async ler (id) {
        let empresa = await this.model.findAll(id);
        console.log(empresa);
    }

    async atualizar (id, objetoAtualizado) {
        let objeto = await this.model.findByPk(id)
        await objeto.update(objetoAtualizado)
    }

    async delete (id) {
        const object = await this.model.findByPk(id);
        let empresa= await object.destroy();
        console.log (empresa);
    }
}

modules.exports = Dao