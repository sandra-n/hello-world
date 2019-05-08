"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var sha3_1 = __importDefault(require("sha3"));
//import Pool = require('pg').Pool;
var pool = new pg_1.Pool({
    user: 'sandra',
    host: 'localhost',
    database: 'listausuarios',
    password: 'login',
    port: 5432,
});
var hash = new sha3_1.default(512);
/*function geraToken (nome: string): string {
    const header = {
        "alg": "HS256",
        "typ": "JWT"
    }
    const payload = {
        "name": nome
    }
}*/
exports.verificaUsuario = function (req, res) {
    var email = req.body.email;
    var senha = req.body.senha;
    console.log("oii");
    pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, senha], function (error, results) {
        console.log(results.rows);
        if (error) {
            throw error;
        }
        if (results.rowCount == 0) {
            res.status(401).json();
        }
        else {
            hash.update(senha);
            console.log(hash.digest('hex'));
            res.status(200).send(results.rows);
        }
    });
};
