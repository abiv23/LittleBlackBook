var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var moment = require('moment');
var methodOverride = require('method-override')

/* routes are mounted at review_date */
/* pull in date info with render review_date?date_id=1 */
router.get('/', (req, res) => {
    return knex('date')
        .where('id', req.query.date_id)
        .first()
        .then((date_data) => {
            return date_data
        }).then((date_data) => {
            knex.select('*')
                .from('date')
                .where('date.id', req.query.date_id)
                .join('suitor', 'date.suitor_id', 'suitor.id')
                .then((date_data) => {
                    date_data[0].date = moment(date_data.date).format('MMM Do');
                    let date = date_data[0];
                    res.render('review_date', {
                        date
                    });
                })

        })
})



//update date info
router.put('/', (req, res, next) => {
    console.log(req.body);
    var dateReview = {
        rating: req.body.rating,
        note: req.body.note
    }
    knex('date').where('id', req.query.date_id).update(dateReview).then(data => {
        res.redirect(`/`)
    })
})

module.exports = router;
