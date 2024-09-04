// Importer le module express 
const express = require('express');

// créer un application 
const app = express();

// définir une route vers la page d'accueil (la racine du site)
app.get('/', function(requete, response){
    // définir l'entête HTTP avec son type MIME
    response.setHeader('Content-Type', 'text/plain');
    // définir le texte à afficher
    response.write("Hello world : Express, vous êtes sur la page d'accueil");
    // signifier la fin de la réponse pour qu'elle soit envoyée
    response.end();
});

app.listen(8000);  // le serveur web écoute sur le port 8080
console.log("Express est démarré et attend votre requête...")