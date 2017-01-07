var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.get('/', function(req, res, next) {
    res.redirect(`date/${req.signedCookies.user_id}`);
});

router.get('/:id', function(req, res, next) {
    res.render('date');
});

module.exports = router;
