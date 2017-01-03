exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    // return knex('suitor_interest').del().then(
    // knex.raw('TRUNCATE suitor_interest RESTART IDENTITY CASCADE;')
    knex.raw('DELETE FROM suitor_interest; ALTER SEQUENCE suitor_interest_id_seq RESTART WITH 5')
        .then(() => {
            const suitor_interests = [{
                suitor_id: '1',
                interest_id: '1'
            }, {
                suitor_id: '2',
                interest_id: '1'
            }, {
                suitor_id: '3',
                interest_id: '1'
            }, {
                suitor_id: '4',
                interest_id: '1'
            }, {
                suitor_id: '2',
                interest_id: '2'
            }]
            return knex('suitor_interest').insert(suitor_interests);
        });
};
