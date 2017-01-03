exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('interest').del()
    knex.raw('TRUNCATE interest RESTART IDENTITY CASCADE;')
        .then(() => {
            const interests = [{
                interest_name: 'Hiking'
            }, {
                interest_name: 'Movies'
            }, {
                interest_name: 'Skiing'
            }, {
                interest_name: 'Reading'
            }]
            return knex('interest').insert(interests);
        });
};
