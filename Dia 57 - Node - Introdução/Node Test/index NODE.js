// Carrega o modulo HTTP do Node
var http = require("http");

// Cria um servidor HTTP e uma escuta de requisições para a porta 8000
http.createServer((request, response) => {

  // Configura o cabeçalho da resposta com um status HTTP e um Tipo de Conteúdo
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Manda o corpo da resposta "Olá Mundo"
   response.end('Ola Mundo\n');
}).listen(8000, '127.0.0.1');

// Imprime no console a URL de acesso ao servidor
console.log('Servidor executando em http://127.0.0.1:8000/');