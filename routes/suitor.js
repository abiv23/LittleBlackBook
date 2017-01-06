var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var suitor = require('../db/suitor.js');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
<<<<<<< HEAD
    knex('suitor').where('id', req.params.id).first().then(suitor => {
        suitor.interests = [];
        suitor.allInterests= [];
        knex.select('*').from('interest').then(allInterests => {
          // let allInterest = {
          //     id: allInterests[0].id,
          //     name: allInterests[0].interest_name
          // };
          suitor.allInterests.push(allInterests);
          console.log(suitor.allInterests[0][1].interest_name);
          // console.log(suitor.allInterests.interest_name);
        }).then(
        knex('suitor_interest')
            .where('suitor_id', req.params.id)
            .then(suitor_interests => {
                let interests = suitor_interests.map((item) => {
                    return knex('interest')
                        .where('id', item.interest_id).then((singleInterest) => {
                            let interest = {
                                id: singleInterest[0].id,
                                name: singleInterest[0].interest_name
                            };
                            suitor.interests.push(interest);
                        })
                })
                return Promise.all(interests)
            }).then(info => {
                for (var j = 0; j<suitor.interests.length; j++){
                  for (var i = 0; i<suitor.allInterests[0].length; i++){
                    if (suitor.allInterests[0][i].id == suitor.interests[j].id) {
                      suitor.allInterests[0][i].interest_active = 1;
                    }
                  }
                }
                res.render('suitor', {
                    data: suitor
                })
            })
          )
    });
=======
    knex('suitor').where('id', req.params.id).first().then(data => {
        res.render('suitor', {
            data
        });
    })

>>>>>>> toolkit
});

router.delete('/:id/delete', function(req, res, next) {
    knex('suitor').where('id', req.params.id).first().del().then(data => {
        res.redirect('/');
    });
});

<<<<<<< HEAD
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
=======
router.get('/:id/suitor', (req, res) => {
    if (!isNaN(req.params.id)) {

    }
});
>>>>>>> toolkit

module.exports = router;
