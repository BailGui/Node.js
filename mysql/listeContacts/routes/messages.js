var express = require('express');
var router = express.Router();

const Message = require('../models/message.model.js');

// import du module 'moment.js"
var moment = require('moment');

// import du controller message
const messages = require('../controllers/message.controller.js');

/* Toutes les routers décrites dans ce fichier correspandent à des URL commençant par : localhost:8080/messages/...   */

// route pour l'URL : localhost:8080/messages/
router.get('/', messages.readAll);

// route pour l'url create
router.post('/create', messages.create);

module.exports = router;