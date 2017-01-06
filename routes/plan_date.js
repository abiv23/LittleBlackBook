var express = require('express');
var router = express.Router();
var auth = require('../auth/auth.js');
var knex = require('../db/knex.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(`plan_date/${req.signedCookies.user_id}`);
});

router.get('/:id', auth.allowAccess, function(req,res,next) {
    knex('suitor').where('profile_id', req.params.id).then(data=>{
      data.profile_id = req.params.id
      console.log(data);
      res.render('plan_date', {data});
    });
});

router.post('/', function(req,res,next){
  console.log(req.body);
})
module.exports = router;