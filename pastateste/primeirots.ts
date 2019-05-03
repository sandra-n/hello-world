import express = require('express');

const app: express.Application = express();

app.get('/', function(req, res){
    res.send('Hello world');
});

app.listen(8080, function(){
    console.log('Esta rodando');
});