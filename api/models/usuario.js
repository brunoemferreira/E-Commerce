const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

// Carrega arquivo que criei para conter as mensagens padão do sistema
const defaultMessages = require("../helpers/defaultMessages.json");

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, defaultMessages["parcial-vazio"]]
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, defaultMessages["parcial-vazio"]],
    index: true,
    match: [/\S+@\S+\.\S+/, defaultMessages["parcial-invalido"]]
  },
  loja: {
    type: Schema.Types.ObjectId,
    ref: "Loja",
    required: [true, defaultMessages["parcial-vazio"]]
  },
  permissao: {
    type: Array,
    default: ["cliente"]
  },
  hash: String,
  salt: String,
  recovery: {
    type: {
      token: String,
      date: Date
    },
    default: {}
  }
}, { timestamps: true });

// Ativar o plugin do unique Validator para os campos que estão utilizando unique
UsuarioSchema.plugin(uniqueValidator, { message: defaultMessages["parcial-utilizado"] })

// ******** Métodos para a parte de usuário *********
// Método para criação de nova senha de usuário
UsuarioSchema.methods.setSenha = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
};

// Método para verificar validade da senha 
UsuarioSchema.methods.validarSenha = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
  return hash === this.hash;
}

UsuarioSchema.methods.gerarToken = function () {
  const hoje = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 15);

  return jwt.sign({
    id: this._id,
    email: this.email,
    nome: this.nome,
    exp: parseFloat(exp.getTime() / 1000, 10)
  }, secret);
};

UsuarioSchema.methods.enviarAuthJSON = function () {
  return {
    _id: this._id,
    nome: this.nome,
    email: this.email,
    loja: this.loja,
    role: this.permissao,
    token: this.gerarToken()
  };
};

// Recuperação de Senha
UsuarioSchema.methods.criarTokenRecuperacaoSenha = function () {
  this.recovery = {};
  this.recovery.token = crypto.randomBytes(16).toString("hex");
  this.recovery.date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  return this.recovery;
};

// Finalizar a Token após a recuperação da mesma
UsuarioSchema.methods.finalizarTokenRecuperacaoSenha = function () {
  this.recovery = { token: null, date: null };
  return this.recovery;
}

module.exports = mongoose.model("Usuario", UsuarioSchema);