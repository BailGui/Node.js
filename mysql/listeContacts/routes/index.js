var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
})

  .get('/contact', function (req, res) {
    res.render('formulaire', { title: "BailGui was here" })
  })



module.exports = router;
