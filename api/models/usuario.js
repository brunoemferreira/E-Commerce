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
}, {
  timestamps: true
})