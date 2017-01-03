var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var protect = require('../db/encryption.js');

router.get('/', (req, res, next)=>{
  res.render('admin', { title: 'Welcome, Administrator' });
})

module.exports = router;
