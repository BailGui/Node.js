var express = require('express');
var router = express.Router();

var root = require("../controllers/root.controller");
/* GET home page. */
router.get('/', root.home);

/* Afficher le formulaire*/
router.get('contact', root.form);

/* Afficher les données entrées dans le formulaire*/
router.post('/traitement', root.traitement);

module.exports = router;
