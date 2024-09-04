// Importer le module express 
const express = require('express');

// créer un application 
const app = express();

// définir une route vers la page d'accueil (la racine du site)
app.get('/', function(requete, response){
    response.setHeader('Content-Type', 'text/plain');
    response.write("Hello world : Express, vous êtes sur la page d'accueil");
    response.end();
})