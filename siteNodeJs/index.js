// Importer le module express 
const express = require('express');

// créer un application 
const app = express();

// Ajouter le package "morgan" pour faire du logging
const morgan = require("morgan");

// Définition du répertoire public contenant les ressources externes (img, CSS, JS,...)
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

// Utiliser morgan pour le log
app.use(morgan("LOG :date[web] | User-Agent=:user-agent | URL demandée = :url | Status=:status"));

// définir une route vers la page d'accueil (la racine du site)
app.get('/', function(requete,response){
    response.render('accueil.ejs');
});

// définir une route vers la page contact
app.get('/contact', function(requete,response){
    response.render('contact.ejs');
});

// définir une route vers la page culture
app.get('/culture', function(requete,response){
    response.render('culture.ejs');
});

// définir une route vers la page galerie 
app.get('/galerie', function(requete,response){
    response.render('galerie.ejs');
});

// définir une route vers la page géographie
app.get('/geographie', function(requete,response){
    response.render('geographie.ejs');
});

// définir une route vers la page histoire
app.get('/histoire', function(requete,response){
    response.render('histoire.ejs');
});


// définir une route vers la page liens
app.get('/liens', function(requete,response){
    response.render('liens.ejs');
});

var urlEncodedParser = express.urlencoded({extended: false});

app.post('/traitement', urlEncodedParser, function(req, res, next) {
    let lenom = req.body.nom; 
    let leprenom = req.body.prenom;
    let laville = req.body.ville;
    let lemail = req.body.email;
    let lemessage = req.body.message;

    
    res.render('traiter_form.ejs', { title: 'Formulaire de traitement', nom:lenom , prenom:leprenom, ville:laville, email:lemail, msg:lemessage,  });
  });

// définir une route vers la page 404
app.get('/404', function(requete,response){
    response.render('page-404.ejs');
});

// définir une "page" gérant l'erreur 404 
app.use(function(requete,response,next){
    response.status(404).render('page-404.ejs',{msg:"La page demandée n'existe pas"});
});

app.listen(8080);  // le serveur web écoute sur le port 8080
console.log("Express est démarré et attend votre requête...")