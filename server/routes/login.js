var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var protect = require('../db/encryption.js');

router.get('/', function(req,res,next){
  protect.encrypt(req.query.password).then(hash => {
  console.log(hash);
});


});
/* GET home page. */
router.post('/', function(req, res, next) {
  let profile = req.body;
  knex.select().table('profile').where('email', profile.email)
  .then(data => {
    console.log(data);
    protect.decrypt(data.password, profile.password);
  })
  console.log(req.body)

});

module.exports = router;
