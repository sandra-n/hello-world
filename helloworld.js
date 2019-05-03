var http = require('http')
var frase = 'Testando variaveis'

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World');
    res.end(frase);
}).listen(8080);