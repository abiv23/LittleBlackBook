var express = require('express');
var router = express.Router();
var profile = require('../db/profile.js');
var protect = require('../db/encryption.js')

router.post('/', (req, res, next) => {
    if (validUser(req.body)) {
        profile.checkIfProfileExisits(req.body)
            .then((result) => {
                if (result === undefined) {
                    req.body.password = protect.encrypt(req.body.password)
                        .then((data) => {
                            const newProfile = {
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                                email: req.body.email,
                                password: data
                            };
                            profile.storeNewProfile(newProfile).then(id => {
                              const isSecure = req.app.get('env'!= 'development')
                              res.cookie('user_id', id, {
                                httpOnly: true,
                                signed: true,
                                secure: isSecure
                              });
                                res.redirect(`/profile/${id}`)
                            })
                        });
                } else {
                  next(new Error('Profile Already Exists with that Email'))
                }
            }).catch(error => {});

    } else {
        next(new Error('Invalid User Credentials'))
    }
});

function validUser(user) {
    return typeof user.first_name == 'string' &&
        user.first_name.trim() != '' &&
        typeof user.last_name == 'string' &&
        user.last_name.trim() != '' &&
        typeof user.email == 'string' &&
        user.email.trim() != '' &&
        typeof user.password == 'string' &&
        user.password.trim() != '' &&
        user.password.length > 5;

}

module.exports = router;
