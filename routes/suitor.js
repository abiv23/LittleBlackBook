var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var suitor = require('../db/suitor.js');
var auth = require('../auth/auth.js');



/* GET users listing. */
// router.get('/:id', auth.allowAccess, function(req, res, next) {
router.get('/:id', function(req, res, next) {
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
});


router.post('/:id/update', auth.allowAccess, function(req, res, next){
  // let profile = req.body;
  console.log("length = "+req.body.suitor_interests.length);

        // delete all suitor interests
        // knex('suitor_interest')
        //   .where('suitor_id', req.params.id)
        //   .del()
        //   .then();
          // .then(data => { });

          // let interests = req.body.suitor_interests.map((item) => {
          //     console.log("interests = "+interests);
          // });

        // add suitor interests
          knex('suitor_interest')
            // .where('suitor_id', req.params.id)
            // .update(suitor_interest => {
            .update({
                // let interests = suitor_interest.map((item) => {
                  suitor_id: req.params.id,
                  interest_id: req.body.suitor_interests
                // })
                // return Promise.all(suitor_interests)
            })
            .then(data=>{
              res.redirect(`/suitor/${req.params.id}`);
            });

            // update suitor profile
            // knex('suitor')
            //   .where('id', req.params.id)
            //   .update({
            //   name: req.body.name,
            //   age: req.body.age,
            //   where_met: req.body.where_met,
            //   rating: req.body.rating
            // }).then(data=>{
            //   res.redirect(`/suitor/${req.params.id}`);
            // });

});

router.post('/:id/updatePhoto', auth.allowAccess, function(req, res, next){
  console.log(req.body.photo_url)
  knex('profile').where('id', req.params.id).update({
    image_url: req.body.photo_url
  }).then(data=>{
    res.redirect(`/profile/${req.params.id}`);
  })

});

router.delete('/:id/delete', auth.allowAccess,function(req, res, next) {
   knex('profile').where('id', req.params.id).first().del().then(data => {
      res.clearCookie('user_id');
      res.redirect('/');
   });
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
