var express = require('express');
var router = express.Router();

var root = require("../controllers/root.controller");

// Afficher tous les messages
router.get('/', messages.readAll);

// Afficher tous les messages sous forme d'un liste
router.get('/list', messages.list);

// Lire un seul message selon son id
router.get('/read/:id', messages.readById);

// Ajouter un message
// Afficher le formulaire d'ajout(vide) pour définir le message
router.get('/newmsg', messages.newmsg);

// Sauvegarder dans la DB ce nouveau message 
router.post('/create', messages.create);

// Mettre à jour un message
// Afficher le formulaire avec les données existantes
router.get('/edit/:id', messages.updateById);

// Mise à jours de la base de données
router.post('/update/:id', messages.update);

// Supprimer un message
// Afficher les données existantes et attendre la confirmation avant de supprimer
router.get('/confirm/:id', messages.deleteById);

// Supprimer dans la DB après confirmation 
router.post('/delete/:id', messages.delete);

module.exports = router;