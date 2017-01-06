var express = require('express');
var router = express.Router();
var auth = require('../auth/auth.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(`plan_date/${req.signedCookies.user_id}`);
});

router.get('/:id', auth.allowAccess, function(req,res,next) {
  res.render('plan_date')
})
module.exports = router;
