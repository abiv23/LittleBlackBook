exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM date; ALTER SEQUENCE date_id_seq RESTART WITH 6')
        .then(() => {
            const dates = [{
                id: 1,
                suitor_id: 1,
                profile_id: 1,
                date: '01/04/2017',
                time: '01:00:00',
                location: 'Chucky Cheese',
                rating: 10
            }, {
                id: 2,
                suitor_id: 2,
                profile_id: 3,
                date: '01/02/2017',
                time: '01:00:00',
                location: 'Linger',
                rating: 10
            }, {
                id: 3,
                suitor_id: 3,
                profile_id: 2,
                date: '01/04/2017',
                time: '01:00:00',
                location: '7-11',
                rating: 10
            }, {
                id: 4,
                suitor_id: 4,
                profile_id: 4,
                date: '01/05/2017',
                time: '01:00:00',
                location: 'Colt and Grey',
                rating: 10
            },
            {
                id: 5,
                suitor_id: 1,
                profile_id: 2,
                date: '01/05/2017',
                time: '01:00:00',
                location: 'Bathroom',
                rating: 2
            }]
            return knex('date').insert(dates);
        });
};
