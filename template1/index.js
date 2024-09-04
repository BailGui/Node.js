// Importer le module express 
const express = require('express');

// créer un application 
const app = express();

// définir une route vers la page d'accueil (la racine du site)
app.get('/', function(requete,response){
    response.render('accueil.ejs');
});

// définir une route vers la page contact
app.get('/contacts', function(requete,response){
   response.render('contact.js');
});

// définir une route dynamique
app.get('/page=:numero', function(requete,response){
    const monParametre = requete.params.numero;
    // je récupère la valeur de mon paramètre passé dans l'URL
    let numeropage = requete.params.numero;

    // définir l'entête HTTP avec son type MIME
    response.setHeader('Content-Type', 'text/plain');

    // je vérifie que la valeur transmise est acceptable
    // exemple : on suppose qu'on accepte uniquement des valeurs entières de 1 à 5
    // si oui, j'affiche. Si non, je l'indique par une erreur 
    if (Number.isInteger(Number(monParametre)) && ((monParametre>0 && monParametre<=5))){
        response.write("Ceci est la page numéro" + monParametre);
        // OU BIEN response.write(`Ceci est la page n°${monParametre}`);
        response.end();
    } else {
        response.status(404).send("La valeur de numero n'est pas autorisée !");
    }
});

// définir une "page" gérant l'erreur 404 
app.use(function(requete,response,next){
    response.status(404).render('404.js');
});

app.listen(8080);  // le serveur web écoute sur le port 8080
console.log("Express est démarré et attend votre requête...")