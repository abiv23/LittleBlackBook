var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.get('/', function(req, res, next) {
    res.redirect(`date/${req.signedCookies.user_id}`);
});

router.get('/:id', function(req, res, next) {
    let information = {};
    res.render('date');
    // return knex('date').select('*').where('date.profile_id', req.signedCookies.user_id).join('suitor', 'date.suitor_id', 'suitor.id').then((data) => {
        //  res.render('date', {data});
    //  }).catch((error)=> {
      //  console.log(error);
    //  })
});

module.exports = router;
