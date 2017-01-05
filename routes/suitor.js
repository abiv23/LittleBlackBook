var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var suitor = require('../db/suitor.js');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  knex('suitor').where('id', req.params.id).first().then(data=>{
    res.render('suitor', {data});
  })

});

router.delete('/:id/delete', function(req,res,next) {
  knex('suitor').where('id', req.params.id).first().del().then(data=>{
    res.redirect('/');
  }
  );
});

router.get('/:id/suitor', (req,res) => {
  if(!isNaN(req.params.id)) {

  }
});

module.exports = router;
