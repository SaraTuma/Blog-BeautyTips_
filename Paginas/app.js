const inputs = document.querySelectorAll(".input");
const mongoose = require("mongoose")
const express = require("express");
mongoose.Promise = global.Promise;

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


//verificando erro na connecao com THEN ou Catch
mongoose.connect("mongodb://localhost/loja", { useMongoClient: true //para evitar alguns erros na execução
    }).then(()=>{
        console.log("MongoDB connectado!")
    }).catch((err)=>{
    console.log("------ERRO ao criar ao se conectar MongoDB : -----\n"+err)
})

const UsuarioSchema = mongoose.Schema({
  nome: {
      type: String,
      require: true
  },
  email:{
      type: String,
      require: true
  },
  telefone: {
      type: Number,
      
  },
  mensagem:{
      type: String
  }
})


mongoose.model('usuarios', UsuarioSchema)

var usuario=  mongoose.model('usuarios')

// Criar um documento para a collection usuarios




/*
function criarUsuario(){
    new usuario({
        nome: document.getElementsByName("name").values,
        email: document.getElementsByName("email").values
    // Para salvar usuario
    }).save().then(()=>{
        console.log("Usuario Sara, salvo com sucesso!")
    }).catch((err)=>{
        console.log("ERRO: Usuario Sara não salvo!\n"+ err)
    })

    res.redirect("/")
}
*/

function criarUsuario(){
  location.replace('www.google.com')
}