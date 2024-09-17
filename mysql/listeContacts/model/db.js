//importer le module MySQL
const mysql = require("mysql");

//importer le fichier de configuration
const dbConfig = require("../config/dbconfig.js");


// Chargement de la configuration pour la connexion
const connection = mysql.createConnection({
    host: dbConfig.DB_HOST,
    user: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    name: dbConfig.DB_NAME,
    port: dbConfig.DB_PORT
});

// Connexion 
connection.connect(function(error){
    if (error) throw error; // si il y a une erreur lors de la connexion, on s'arrête ici
    // sinon, tout se passe bien et on est connecté
    console.log("Connecté avec succès à la base de données");
});

// on exporte ce module de connexion pour les autres parties de l'application
module.exports = connection;