let express = require('express');
let router = express.Router();

// Module formidable pour l'upload

let formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Envoi du formulaire d'upload

router.post('/', function(req, res){

  // nouveau formulaire entrant à traiter
  let form = new formidable.IncomingForm();

  //Définir une taille maximum pour les fichiers à uploader
  form.maxFileSize = 2 * 1024 * 1024; // 2Mo

  // Analyser le formulaire
  form.parse(req);

  // Filtrer sur les types de données acceptées
  let fileTypes = ['image/jpeg', 'image/png', 'image/gif'];

  form.onPart = function (part){
    if (fileTypes.indexOf(part.mimetype) === -1){
      form._error(new Error('File type is not supported :' + part.mimetype));
    }
    if(!part.originalFilename || fileTypes.indexOf(part.mimetype) !== -1){
      form._handlePart(part);
    }
  };

  // Quand l'événement fileBegin est levé, c'est le début de l'upload
  form.on('fileBegin', function (name, file){
    // on uploade le fichier et on affiche en console son nom
    console.log("Fichier uploadé : " + file.originalFilename);
    // on sauvegarde le fichier uploadé dans le répertoiree 'uploads'
    file.filepath = __dirname + '/../public/uploads/' + file.originalFilename;
    console.log(file.filepath);
  });

  // A la fin de l'upload, on se redirige vers la page /uploaded pour confirmer
  form.on('file', function (name, file){

    console.log("Nom original du fichier : " + file.originalFilename);
    console.log('Taille du fichier : ' + file.size);
    console.log('Type de fichier : ' + file.mimetype);

    res.render('uploaded.ejs', {title: "Upload", nom: file.originalFilename,taille: file.size, type: file.mimetype});

  });

  // En cas de succès, on affiche dans la console Ok
  form.on('end', function (){
    console.log('Upload OK ! ');
  });

  // En cas d'erreur, on se redirige vers la page /error
  form.on('error', function (err){
    console.log('Erreur : ' + err);
    console.log('Stack : ' + err.stack);

    res.render('error.ejs', {title:'Erreur', message: "Une erreur s'est produite", error: err});
  });

});

module.exports = router;
 
