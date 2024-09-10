var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Affichage du formulaire de contact (voir view contact_form.ejs) */
router.get('/contact', function(req, res, next) {
  res.render('contact_form', { title: 'Formulaire de contact' });
});

/* Définition du middleware qui va analyser la requête POST */
var urlEncodedParser = express.urlencoded({extended:false});

/* Récupération des données et affichage de la page de traitement */ 
router.post('/traitement', urlEncodedParser, function(req, res, next) {
  let lenom = req.body.nom; 
  let lemessage = req.body.msg;

  res.render('traiter_form', { title: 'Formulaire de traitement', nom:lenom , msg:lemessage });
});

module.exports = router;
