var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact_form', { title: 'Express' });
});

router.get('/formulaire', function(req, res, next) {
  res.render('traiter_form', { title: 'Express' });
});

module.exports = router;
