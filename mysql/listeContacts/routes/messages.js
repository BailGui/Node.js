var express = require('express');
var router = express.Router();

const Message = require('../models/message.model.js');

// import du module 'moment.js"
var moment = require('moment');

/* Toutes les routers décrites dans ce fichier correspandent à des URL commençant par : localhost:8080/messages/...   */

// route pour l'URL : localhost:8080/messages/
router.get('/', (req, res) => {
    console.log('GET /messages/ pour lire tous les messages');

    Message.readAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: 'Erreur pendant la lecture de tous les messages'
            });
        } else {
            console.log('Data : ', data);
            const titrePage = "Liste de messages";
            moment.locale('fr'); // pour transformer les dates et heures en français
            res.render('listeMessages', { title: titrePage, donnees: data, moment: moment });
        }
    });

});

router.post('/create', (req, res) => {
    console.log('POST /create pour écrire un message');
    const titrePage = "Formulaire reçu";
    const lenom = req.body.nom;
    const lemessage = req.body.msg;

    if ((!req.body) || (lenom == "") || (lemessage == "")) {
        console.log('Le contenu ne peut pas être vide !');
        res.redirect('/contact');
    } else {
        console.log(req.body);

        const unMsg = new Message({
            nom: lenom,
            msg: lemessage
        });

        Message.create(unMsg, (err, data) => {
            console.log("message :", unMsg);
            if (err) {
                res.status(500).send({
                    message: "Erreur pendant la création du message"
                });
            } else {
                console.log('Data = ', data);
                res.render('confirmation', { title: titrePage, nom: unMsg.nom, msg: unMsg.msg });
            }
        });
    }
});

module.exports = router;