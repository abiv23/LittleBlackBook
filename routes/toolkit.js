var express = require('express');
var router = express.Router();

/* all routes are mounted at /toolkit */
router.get('/', function(req, res, next) {
    res.render('toolkit');
});

router.get('/sos', function(req, res, next) {
    res.render('sos', {
        layout: false
    });
});

router.get('/common', function(req, res, next) {
    res.render('common');
});

module.exports = router;
