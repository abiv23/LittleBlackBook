var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.get('/', function(req, res, next) {
    res.redirect(`date/${req.signedCookies.user_id}`);
});

router.get('/:id', function(req, res, next) {
  let user_id = req.signedCookies.user_id[0];
  console.log(req.params.id);
    knex.select('*').from('date').where('date.profile_id', req.params.id).join('suitor', 'date.suitor_id', 'suitor.id').then((date)=>{
      console.log(date);
      res.render('date', {date});
    })
});

module.exports = router;
