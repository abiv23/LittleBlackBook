var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.post('/', function(req, res, next) {
  let profile = req.body;
  knex.select().table('profile').where('email', profile.email)
  .then(data => {
    console.log(data);
  })
  console.log(req.body)

});

module.exports = router;
