var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var protect = require('../db/encryption.js');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    knex('profile').where('id', req.params.id).first().then(data => {
        res.render('profile', {
            data
        });
    })

});

router.post('/:id/update', function(req, res, next) {
    let userPassword = protect.encrypt(req.body.password).then(data => {
        return data;
    });
    console.log(userPassword);
    knex('profile').where('id', req.params.id).update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }).then(data => {
        res.redirect(`/profile/${req.params.id}`)
    });
})

router.delete('/:id/delete', function(req, res, next) {
    knex('profile').where('id', req.params.id).first().del().then(data => {
        res.redirect('/admin');
    });
});

module.exports = router;
