var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var moment = require('moment');
var methodOverride = require('method-override')

/* routes are mounted at review_date */
/* pull in date info with render review_date?date_id=1&suitor_id=1 */
router.get('/', (req, res) => {
    return knex('date')
        .where('id', req.query.date_id)
        .first()
        .then((data) => {
            data.date = moment(data.date).format('YYYY[-]MM[-]DD');
            return data
        }).then((date_data) => {
            console.log(date_data);
            knex.select('*')
                .from('date')
                .where('date.id', req.query.date_id)
                .join('suitor', 'date.suitor_id', 'suitor.id')
                .then((suitor_data) => {
                    console.log(suitor_data);
                    res.render('review_date', {
                        suitor_data
                    });
                })

        })
})



//update date info
// router.put('/', (req, res, next) => {
//     console.log(req.body)
//     var newSuitor = {
//         name: req.body.name,
//         profile_id: req.params.id,
//         age: req.body.age,
//         where_met: req.body.where_met,
//         rating: req.body.rating,
//         image_url: req.body.image_url
//     }
//     knex('suitor').insert(newSuitor).returning('profile_id').then(data => {
//         res.redirect('/')
//     })
// })

module.exports = router;
