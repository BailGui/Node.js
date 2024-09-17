// on charge le module 
const db = require("./db.js");
console.log("Je suis dans models/message.mode.js");

// Constructeur 
const Message = function(lemessage) {
    this.nom = lemessage.nom;
    this.msg = lemessage.msg;
    this.date_creation = new Date();
};

// Méthode pour créer un message
Message.create = function(newMsg, résultat){
    db.query("INSERT INTO messages(nom, message) VALUES (?,?);", [newMsg.nom, newMsg.msg],
    function (err, res){
        // si erreur pendant l'insertion => err
        // si ok => res
    if (err){
        console.log("Erreur lors de l'insertion dans Message.create: " + err);
        resultat(err,null);
        return;
    }
    console.log("Réponse Message.create : " + res);
    resultat(null,res);

    });
};

module.exports = Message;