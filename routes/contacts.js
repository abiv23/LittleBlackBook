var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.get('/', function(req,res,next){
  res.redirect(`/${req.signedCookie.user_id}`)
})

router.get('/:id', function(req, res, next) {
  knex('suitor').where('profile_id', req.params.id).then(data=>{
    console.log(data);
    res.render('contacts', {data});
  })
});

router.get('/:id/suitor/:suitor_id', function(req, res, next) {
  knex('suitor').where('id', req.params.suitor_id).then(data=>{
    res.render('contacts', {data});
  })
});


module.exports = router;
