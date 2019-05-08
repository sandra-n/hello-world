"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var sha3_1 = __importDefault(require("sha3"));
//import {jwt} from 'jsonwebtoken';
var jwt = require("jsonwebtoken");
//import Pool = require('pg').Pool;
var pool = new pg_1.Pool({
    user: 'sandra',
    host: 'localhost',
    database: 'listausuarios',
    password: 'login',
    port: 5432,
});
var hash = new sha3_1.default(512);
function geraToken(nome) {
    var header = {
        "alg": "HS256",
        "typ": "JWT"
    };
    var payload = {
        "name": nome
    };
    var secret = 'umafrasequalquerparateste';
    return jwt.sign(payload, secret, { expiresIn: 1000 });
}
//sandra.nihama@taqtile.com : 1234
//fulano.tal@taqtile.com: 9999
exports.verificaUsuario = function (req, res) {
    var email = req.body.email;
    var senha = req.body.senha;
    hash.update(senha);
    var hashuser = hash.digest('hex');
    console.log("oii: ", hashuser);
    console.log(typeof hashuser);
    pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashuser], function (error, results) {
        console.log(results.rows);
        if (error) {
            throw error;
        }
        if (results.rowCount == 0) {
            res.status(401).json();
        }
        else {
            console.log(geraToken(email));
            res.status(200).send(results.rows);
        }
    });
    hash.reset();
};
