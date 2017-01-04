var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {layout:false});
});

// router.get('/suitors', (req, res)=>{
//   res.render('index', { title: 'Suitors' })
// })

module.exports = router;
