/* on importe le module standard http qui va gérer ce protocole */
const Http = require('http');

/* on crée un serveur web qui va écouter sur le port 8888 */
Http.createServer().listen(8888);

Http.createServer(function(request, response){
    response.writeHead(200);
    response.end('Hello World NodeJS !');
}).listen(8888);