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
})

// Connexion 
connection.connect(function(error){
    if (error) throw error;
    console.log("Connecté avec succès à la base de données");
})