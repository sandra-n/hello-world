import express = require('express');
import {Pool} from "pg";
import { isNull, isNullOrUndefined } from 'util';
import SHA3 from 'sha3';
import { jwt } from 'jsonwebtoken';

//import Pool = require('pg').Pool;

const pool = new Pool({
    user: 'sandra',
    host: 'localhost',
    database: 'listausuarios',
    password: 'login',
    port: 5432,
});

const hash = new SHA3(512);

/*function geraToken (nome: string): string {
    const header = {
        "alg": "HS256",
        "typ": "JWT"
    }
    const payload = {
        "name": nome
    }
}*/

export const verificaUsuario = (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;
    
    console.log("oii");


    pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, senha], (error, results) => {
        console.log(results.rows);
        
        if (error){
            throw error;
        }
        if (results.rowCount == 0){
            res.status(401).json();
        }
        else{
            hash.update(senha);
            console.log(hash.digest('hex'));
            res.status(200).send(results.rows);
        }
    })
}
