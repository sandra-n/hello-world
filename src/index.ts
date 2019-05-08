import express = require('express');
import bodyParser = require('body-parser');
import { performLogin } from './telalogin/login';

const app: express.Application = express();
app.use(bodyParser.json())

app.post('/login', performLogin);

app.listen(8080, function(){
    console.info('Running in port 8080');
});