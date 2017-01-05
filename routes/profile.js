var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var protect = require('../db/encryption.js');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  knex('profile').where('id', req.params.id).first().then(data=>{
    res.render('profile', {data});
  })

});

router.post('/:id/update', function(req, res, next){
  let profile = req.body;
  console.log(profile.password);
  if (profile.password.length>0){
    knex.select().table('profile').where('email', profile.email).first()
      .then(data=>{
        protect.decrypt(data.password, profile.password).then(result=>{
          if (result){
            console.log("password correct")
            if (profile.new_password === profile.new_password_verify){
              console.log("passwords match")
              knex('profile').where('id', req.params.id).update({
                first_name: profile.first_name,
                last_name: profile.last_name,
                email: profile.email,
                password: profile.new_password
              }).then(data=>{
                res.redirect(`/profile/${req.params.id}`);
              });
            }
          } else {
            console.log("passwords do not match")
          }
        });
      });
  } 
  knex.select().table('profile').where('email', profile.email).first()
    .then(data=>{
      protect.decrypt(data.password, profile.password).then(result=>{
        if (result){
          console.log("password correct")
          if (profile.new_password === profile.new_password_verify){
            knex('profile').where('id', req.params.id).update({
              first_name: profile.first_name,
              last_name: profile.last_name,
              email: profile.email,
              password: profile.new_password
            }).then(data=>{
              res.redirect(`/profile/${req.params.id}`);
            });
          }
        } else {

        }
      });
    });
  knex('profile').where('id', req.params.id).update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }).then(data=>{
    res.redirect(`/profile/${req.params.id}`)
  });
});

router.delete('/:id/delete', function(req,res,next) {
  knex('profile').where('id', req.params.id).first().del().then(data=>{
    res.redirect('/');
  });
});

module.exports = router;
