const {Pool} = require("../node_modules/pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function CriarTabela(comandoSql) {

    let con = await pool.connect();
    await con.query(comandoSql);
    con.release();
}
/*
async function mostrarTuplas(tabela) {
    let con = await pool.connect();
    let res = await con.query(`select * from ${tabela}`);
    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    }
    con.release();
}*/

//mostrarTuplas('Aluno')

CriarTabela(`

CREATE TABLE Empresa (
    id serial PRIMARY KEY,
    descricao varchar,
    classicacao float,
    end_bairro varchar,
    end_estado varchar,
    end_cidade varchar,
    conta_email varchar,
    conta_usuario varchar,
    conta_senha varchar,
    nome varchar,
    agenda_dia date,
    agenda_horario time
);

CREATE TABLE Usuario (
    id serial PRIMARY KEY,
    nome varchar,
    end_estado varchar,
    end_cidade varchar,
    end_bairro varchar,
    conta_email varchar,
    conta_senha varchar,
    conta_usuario varchar
);

CREATE TABLE Campanha (
    descricao varchar,
    estatisticas varchar,
    tempo_inicio varchar,
    tempo_fim varchar,
    Valor float,
    id serial PRIMARY KEY,
    fk_Empresa_id serial
);

CREATE TABLE Influencer (
    id serial PRIMARY KEY,
    conta_email varchar,
    conta_usuario varchar,
    conta_senha varchar,
    qnt_seguidores integer,
    interacao varchar,
    publico_nicho varchar,
    agenda_dia date,
    agenda_horario time
);

CREATE TABLE Divulgacao (
    id serial PRIMARY KEY,
    plataforma varchar,
    valor float,
    estatisticas varchar
);

CREATE TABLE contato (
    fk_Empresa_id serial,
    fk_Usuario_id serial
);

CREATE TABLE classifca (
    fk_Usuario_id serial,
    fk_Empresa_id serial
);

CREATE TABLE feedback (
    fk_Campanha_id serial,
    fk_Usuario_id serial
);

CREATE TABLE contato_1 (
    fk_Usuario_id serial,
    fk_Influencer_id serial
);

CREATE TABLE faz (
    fk_Divulgacao_id serial,
    fk_Influencer_id serial
);

CREATE TABLE feedback_1 (
    fk_Divulgacao_id serial,
    fk_Usuario_id serial
);
 
ALTER TABLE Campanha ADD CONSTRAINT FK_Campanha_2
    FOREIGN KEY (fk_Empresa_id)
    REFERENCES Empresa (id)
    ON DELETE RESTRICT;
 
ALTER TABLE contato ADD CONSTRAINT FK_contato_1
    FOREIGN KEY (fk_Empresa_id)
    REFERENCES Empresa (id)
    ON DELETE SET NULL;
 
ALTER TABLE contato ADD CONSTRAINT FK_contato_2
    FOREIGN KEY (fk_Usuario_id)
    REFERENCES Usuario (id)
    ON DELETE SET NULL;
 
ALTER TABLE classifca ADD CONSTRAINT FK_classifca_1
    FOREIGN KEY (fk_Usuario_id)
    REFERENCES Usuario (id)
    ON DELETE SET NULL;
 
ALTER TABLE classifca ADD CONSTRAINT FK_classifca_2
    FOREIGN KEY (fk_Empresa_id)
    REFERENCES Empresa (id)
    ON DELETE SET NULL;
 
ALTER TABLE feedback ADD CONSTRAINT FK_feedback_1
    FOREIGN KEY (fk_Campanha_id)
    REFERENCES Campanha (id)
    ON DELETE SET NULL;
 
ALTER TABLE feedback ADD CONSTRAINT FK_feedback_2
    FOREIGN KEY (fk_Usuario_id)
    REFERENCES Usuario (id)
    ON DELETE SET NULL;
 
ALTER TABLE contato_1 ADD CONSTRAINT FK_contato_1
    FOREIGN KEY (fk_Usuario_id)
    REFERENCES Usuario (id)
    ON DELETE SET NULL;
 
ALTER TABLE contato_1 ADD CONSTRAINT FK_contato_2
    FOREIGN KEY (fk_Influencer_id)
    REFERENCES Influencer (id)
    ON DELETE SET NULL;
 
ALTER TABLE faz ADD CONSTRAINT FK_faz_1
    FOREIGN KEY (fk_Divulgacao_id)
    REFERENCES Divulgacao (id)
    ON DELETE RESTRICT;
 
ALTER TABLE faz ADD CONSTRAINT FK_faz_2
    FOREIGN KEY (fk_Influencer_id)
    REFERENCES Influencer (id)
    ON DELETE RESTRICT;
 
ALTER TABLE feedback_1 ADD CONSTRAINT FK_feedback_1
    FOREIGN KEY (fk_Divulgacao_id)
    REFERENCES Divulgacao (id)
    ON DELETE SET NULL;
 
ALTER TABLE feedback_1 ADD CONSTRAINT FK_feedback_2
    FOREIGN KEY (fk_Usuario_id)
    REFERENCES Usuario (id)
    ON DELETE SET NULL;`)