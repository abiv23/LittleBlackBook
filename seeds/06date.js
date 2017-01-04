exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM date; ALTER SEQUENCE date_id_seq RESTART WITH 5')
        .then(() => {
            const dates = [{
                suitor_id: 1,
                profile_id: 1,
                date: '2017-1-2',
                time: '01:00:00',
                location: 'Chucky Cheese',
                rating: 10
            }, {
                suitor_id: 2,
                profile_id: 3,
                date: '2017-1-2',
                time: '01:00:00',
                location: 'Linger',
                rating: 10
            }, {
                suitor_id: 3,
                profile_id: 2,
                date: '2017-1-2',
                time: '01:00:00',
                location: '7-11',
                rating: 10
            }, {
                suitor_id: 4,
                profile_id: 4,
                date: '2017-1-2',
                time: '01:00:00',
                location: 'Colt and Grey',
                rating: 10
            }]
            return knex('date').insert(dates);
        });
};
