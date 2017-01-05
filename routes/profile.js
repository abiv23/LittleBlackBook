var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  knex('profile').where('id', req.params.id).first().then(data=>{
    res.render('profile', {data});
  })

});

router.put('/:id/update', function(req, res, next){
  console.log(req.params.id)
  knex('profile').where('id', req.params.id).update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
})

router.post('/:id/delete', function(req,res,next) {
  knex('profile').where('id', req.params.id).first().del().then(data=>{
    res.redirect('/');
  });
});

module.exports = router;
