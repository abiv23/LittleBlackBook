var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.get('/:id', function(req, res, next) {
  knex('suitor').where('profile_id', req.params.id).then(data=>{
    console.log(data);
    res.render('contacts', {data});
  })
});

module.exports = router;
