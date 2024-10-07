var express = require('express');
var router = express.Router();

// on importe le contrôleur des utilisateurs
var users = require("../controllers/user.controller.js");

// Aller sur la page d'accueil de l'utilisateur connecté
router.get('/', users.home);

// affichage du formulaire d'enregistrement 
router.get('/register', user.registerform);

// Sauvegarder les données d'enregistrement du nouvel utilisateur 
router.post('/register', users.register);

module.exports = router;
