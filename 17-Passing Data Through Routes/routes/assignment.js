var express = require('express');
var router = express.Router();

/* GET assignment page. */
router.get('/', function (req, res, next) {
    res.render('assignment',{
        title:'Assignment',
        specification:'At the end of this Lesson.. Do The Following Before you move on to the next assignment'
        });
});

module.exports = router;