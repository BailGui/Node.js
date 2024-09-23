const sql = require('./db.js')

console.log("On passe par : message.model.js");

const Message = (lemessage) => {
    this.nom = lemessage.nom;
    this.msg = lemessage.msg;
    this.date_creation = new Date();
}

module.exports = Message;