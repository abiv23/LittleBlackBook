var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var protect = require('../db/encryption.js');
// var cookieParser = require('cookie-parser');



router.get('/', function(req, res, next) {
    protect.encrypt(req.query.password).then(hash => {
        console.log(hash);
    });


});
/* GET home page. */
router.post('/', function(req, res, next) {
    let profile = req.body;
    knex.select().table('profile').where('email', profile.email).first()
        .then(data => {
            protect.decrypt(data.password, profile.password).then(result =>{
              console.log(result);
              if (result) {
                if (data.is_admin === true){
                  // res.cookie('')
                  res.redirect('admin');
                } else {
                  res.render('profile')
                }
              };
        })
        })

});

module.exports = router;
