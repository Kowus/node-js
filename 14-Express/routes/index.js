var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Kowus',
      name: 'Kowus is Barnabas\' pseudonym',


  });
});

module.exports = router;
