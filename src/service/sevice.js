var Empresa = {
    create: async function(objeto){
        let empresa = await Empresa.create(objeto);
        console.log(empresa);
    }, 
    read: async function(){
        let empresa = await Empresa.findAll();
        console.log(empresa);
    },
    update: async function(){
        const empresa = await Empresa.findByPk(id);
        await novo.update ({Nome_empre: '${Novo'});
        await novo.update ({Endereco_empre: '${Novo_E'});
    },
    delete: async function(descrição){
        const object = await Empresa.findByPk(id);
        let empresa= await object.destroy();
        console.log (empresa);
}
}

var Campanha = {
    create: async function(objeto){
        let campanha = await Campanha.create(objeto);
        console.log(campanha);
    }, 
    read: async function(){
        let campanha = await Campanha.findAll();
        console.log(campanha);
    },
    update: async function(){
        const campanha = await Campanha.findByPk(id);
        await novo.update ({Descricao_campa: '${Novo'});
        await novo.update ({estatistica_campa: '${Novo_C'});
    },
    delete: async function(valor){
        const object = await Campanha.findByPk(id);
        let campanha = await object.destroy();
        console.log (campanha);
}
}

var Divulgacao = {
    create: async function(objeto){
        let divulgacao = await Divulgacao.create(objeto);
        console.log(divulgacao);
    }, 
    read: async function(){
        let divulgacao = await Divulgacao.findAll();
        console.log(divulgacao);
    },
    update: async function(){
        const divulgacao = await Divulgacao.findByPk(id);
        await novo.update ({valor_divul: '${Novo'});
        await novo.update ({estatistica_divul: '${Novo_D'});
    },
    delete: async function(plataforma){
        const object = await Divulgacao.findByPk(id);
        let divulgacao = await object.destroy();
        console.log (divulgacao);
}
}

var Influencer = {
    create: async function(objeto){
        let influencer = await Influencer.create(objeto);
        console.log(influencer);
    }, 
    read: async function(){
        let influencer = await Influencer.findAll();
        console.log(influencer);
    },
    update: async function(){
        const influencer = await Influencer.findByPk(id);
        await novo.update ({conta_usuario_influ: '${Novo'});
        await novo.update ({conta_senha_influ: '${Novo_I'});
    },
    delete: async function(agenda){
        const object = await Influencer.findByPk(id);
        let influencer = await object.destroy();
        console.log (influencer);
}
}

var Perfil = {
    create: async function(objeto){
        let perfil = await Perfil.create(objeto);
        console.log(perfil);
    }, 
    read: async function(){
        let perfil = await Perfil.findAll();
        console.log(perfil);
    },
    update: async function(){
        const perfil = await Perfil.findByPk(id);
        await novo.update ({qnt_seguidores_perfi: '${Novo'});
        await novo.update ({rede_social_perfi: '${Novo_P'});
    },
    delete: async function(nicho){
        const object = await Perfil.findByPk(id);
        let perfil = await object.destroy();
        console.log (perfil);
}
}

var Usuario = {
    create: async function(objeto){
        let usuario = await Usuario.create(objeto);
        console.log(usuario);
    }, 
    read: async function(){
        let usuario = await Usuario.findAll();
        console.log(usuario);
    },
    update: async function(){
        const usuario = await Usuario.findByPk(id);
        await novo.update ({end_bairro_usuar: '${Novo'});
        await novo.update ({end_cidade_usuar: '${Novo_U'});
    },
    delete: async function(conta_usuario){
        const object = await Usuario.findByPk(id);
        let usuario = await object.destroy();
        console.log (usuario);
}
}

var UsuarioCampanha = {
    create: async function(objeto){
        let usuarioCampanha = await UsuarioCampanha.create(objeto);
        console.log(usuarioCampanha);
    }, 
    read: async function(){
        let usuarioCampanha = await UsuarioCampanha.findAll();
        console.log(usuarioCampanha);
    },
    update: async function(){
        const usuarioCampanha = await UsuarioCampanha.findByPk(id);
        await novo.update ({nota_usuarCampa: '${Novo'});
        await novo.update ({comentario_usuarCampa: '${Novo_UC'});
    },
    delete: async function(nota){
        const object = await UsuarioCampanha.findByPk(id);
        let usuarioCampanha = await object.destroy();
        console.log (usuarioCampanha);
}
}

var UsuarioDivulgacao = {
    create: async function(objeto){
        let usuarioDivulgacao = await UsuarioDivulgacao.create(objeto);
        console.log(usuarioDivulgacao);
    }, 
    read: async function(){
        let usuarioDivulgacao = await UsuarioDivulgacao.findAll();
        console.log(usuarioDivulgacao);
    },
    update: async function(){
        const usuarioDivulgacao = await UsuarioDivulgacao.findByPk(id);
        await novo.update ({nota_usuarDivul: '${Novo'});
        await novo.update ({comentario_usuarDivul: '${Novo_UD'});
    },
    delete: async function(comentario){
        const object = await UsuarioDivulgacao.findByPk(id);
        let usuarioDivulgacao = await object.destroy();
        console.log (usuarioDivulgacao);
}
}

var UsuarioEmpresa = {
    create: async function(objeto){
        let usuarioEmpresa = await UsuarioEmpresa.create(objeto);
        console.log(usuarioEmpresa);
    }, 
    read: async function(){
        let usuarioEmpresa = await UsuarioEmpresa.findAll();
        console.log(usuarioEmpresa);
    },
    update: async function(){
        const usuarioEmpresa = await UsuarioEmpresa.findByPk(id);
        await novo.update ({nota_usuarEmpre: '${Novo'});
    },
    delete: async function(nota){
        const object = await UsuarioEmpresa.findByPk(id);
        let usuarioEmpresa = await object.destroy();
        console.log (usuarioEmpresa);
}
}