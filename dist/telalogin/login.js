"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var queries_1 = require("./queries");
var app = express();
app.use(bodyParser.json());
/*app.get('/login', function(req, res){
    res.send('Faca o login');
});*/
var email_dado;
var senha_dada;
app.post('/login', function (req, res) {
    console.log(req.params);
    console.log(req.body.email);
    console.log(req.body.senha);
    email_dado = req.body.email;
    senha_dada = req.body.senha;
    console.log('usando o post: email: ' + email_dado + ", senha: " + senha_dada);
    queries_1.verificaUsuario(req, res);
});
//app.get('/login', verificaUsuario);
app.listen(8080, function () {
    console.log('Esta rodando');
});
/*import readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

class Pessoa{
    private email: string;
    private senha: string;

    constructor (private pemail: string, private psenha: string){
        this.email = pemail;
        this.senha = psenha;
    }

    get femail(): string{
        return this.email;
    }
    set femail(entrada: string){
        this.email = entrada;
    }

    get fsenha(): string{
        return this.senha;
    }
    set fsenha(entrada: string){
        this.senha = entrada;
    }

    getHash(palavra: string){
        let aux: number;
        aux = 0;

        aux = palavra%50;
        return aux;
    }
}

var email_dado: string;
var senha_dada: number;

senha_dada = 1234;


rl.question("E-mail: ", function(email_dado) {
  rl.close();
});

rl.question("Senha: ", function(senha_dada) {
    rl.close();
});

let alguem: new Pessoa (email_dado, senha_dada);
*/
