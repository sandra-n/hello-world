"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(8080, function () {
    console.log('Esta rodando');
});
