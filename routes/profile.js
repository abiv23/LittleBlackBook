var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('profile');
});

router.delete('/:id/delete', function(req,res,next) {
  knex('profile').where('id', req.params.id).first().del().then(data=>{
    res.redirect('/');
  }
  );
});

module.exports = router;
