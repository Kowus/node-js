var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Express',
      name: 'Understanding Basic Underlying Principles Of Express'
  });
});

module.exports = router;
