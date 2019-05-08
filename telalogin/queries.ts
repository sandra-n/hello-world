import express = require('express');
import {Pool} from "pg";
import SHA3 from 'sha3';
import jwt = require('jsonwebtoken');

const pool = new Pool({
    user: 'sandra',
    host: 'localhost',
    database: 'listausuarios',
    password: 'login',
    port: 5432,
});

const hash = new SHA3(512);

function setToken (word: string): string {
    const header = {
        "alg": "HS256",
        "typ": "JWT"
    }
    const payload = {
        "name": word
    }
    const secret = 'umafrasequalquerparateste';
    return jwt.sign (payload, secret, {expiresIn: 1000});

}

//sandra.nihama@taqtile.com : 1234
//fulano.tal@taqtile.com: 9999

export const verificaUsuario = (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;
    hash.update(senha);
    var hashuser = hash.digest('hex');
    
    console.log("oii: ", hashuser);
    console.log(typeof hashuser);


    pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashuser], (error, results) => {
        console.log(results.rows);
        
        if (error){
            throw error;
        }
        if (results.rowCount == 0){
            res.status(401).json();
        }
        else{
            console.log(setToken(email));
            res.status(200).send(results.rows);
        }
    })
    hash.reset();
}
