var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var protect = require('../db/encryption.js');

router.get('/', (req, res, next)=>{
  knex('profile').select().then(data =>{
    res.render('admin', {data});
  })

})

module.exports = router;
