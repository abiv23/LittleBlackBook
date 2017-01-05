var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('toolkit');
});

router.get('/sos', function(req, res, next) {
    res.render('sos', {
        layout: false
    });
});

module.exports = router;
