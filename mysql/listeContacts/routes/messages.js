var express = require('express');
var router = express.Router();

// importation de la connexion DB via le modèle
const Message = require('../models/message.model');


/* Toutes les routes décrites dans ce fichier correspondent à des URL commençant par : localhost:8080/messages/... */

// route pour l'URL : localhost:8080/messages/
router.get('/', function(req, res) {
    console.log("GET /messages/ pour lire tous les messages")
    res.send('Ici on aura la lecture des messages', { title: 'Express' });
});

route.post('/create', function(req,res){
    console.log("POST /create pour écrire un message");


if((!req.body)||(lenom=="")||(lemessage="")) {
    console.log("Le formulaire est incomplet !");
    res.redirect('/contact');

} else {
    console.log(req.body);
    // créer un message ave son modèle
    const unMsg = new Message({
        nom: lenom,
        msg: lemessage,
    });

    // utiliser la méthode create du modèle Message
    Message.create(unMsg, function(err,date){
        if (err) {
            res.status(500).send({
                message: "Erreur pendant la création du message"
            });
        } else {
            res.render('confirmation.ejs',{title:titrePage, nom:unMsg.nom, msg:unMsg.msg});
        }
    });

    }

});

module.exports = router;