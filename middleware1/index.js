const express = require('express');
const app = express();

// Définition du middleware
const middleware = function(req, resp, next){
    console.log("Middleware, la requête est : " + req.url);
    next();
};

// Utilisation du middleware
app.use(middleware);

app.get('/', function(requete, response){
    console.log("Requête reçue...");
    response.send("Hello world: middleware");
});

app.listen(8080, function(){
    console.log("Express: serveur en attente...");
});


