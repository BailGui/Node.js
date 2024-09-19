var express = require('express');
var router = express.Router();

const root = require('../controllers/root.controller');

/* GET home page. */
router.get('/', root.home);

router.get('/contact', root.contact);



module.exports = router;
