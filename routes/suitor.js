var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var suitor = require('../db/suitor.js');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  knex('suitor').where('id', req.params.id).first().then(data=>{
    res.render('suitor', {data});
  });
  // knex('suitor_interest')
  // .where('suitor_id', req.params.id)
  // .then(data2=>{
  //   console.log("suitor_interests - "+data2[0]);
  //   var interest_id = data2[0].interest_id;
  //   knex('interest')
  //   .where('id', interest_id)
  //   .then(data3=>{
  //     console.log(data3);
  //   })
  // })

  knex.from('suitor')
    .innerJoin('suitor_interest', 'suitor.id', 'suitor_interest.suitor_id')
    .then(data4 => {
      console.log(data4);
    });

//   knex('suitor')
//   .select(['projects.id', 'projects.project_number', 'projects.project_name', 'projects.start_date', 'projects.end_date',
//     'owners.name', 'owners.email_addr as owner_email_addr',
//     'clients.company', 'clients.email_addr as client_email_addr', 'clients.first_name', 'clients.last_name'])
// .innerJoin('owners', 'owners.id', 'projects.owner_id')
// .innerJoin('clients', 'clients.id', 'projects.client_id');
  // suitor_interest
  // suitor_id
  // interest_id

  // id
  // interest_name
});

router.delete('/:id/delete', function(req,res,next) {
  knex('suitor').where('id', req.params.id).first().del().then(data=>{
    res.redirect('/');
  }
  );
});

// router.get('/:id/suitor', (req,res) => {
//   if(!isNaN(req.params.id)) {
//     Suitor.getByUser(req.params.id)
//     // .then(suitors => {
//     //   if (suitors.length > 1) {
//     //     res.json(suitors);
//     //   } else {
//     //     res.status(400);
//     //     res.json(suitors);
//     //   }
//     });
//   }
// });

module.exports = router;
