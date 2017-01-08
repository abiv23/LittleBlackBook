exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('interest').del().then(
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
            }, {
                interest_name: 'Cycling'
            }, {
                interest_name: 'Dogs'
            }, {
                interest_name: 'Coffee'
            }, {
                interest_name: 'Craft Beer'
            }, {
                interest_name: 'Reality TV'
            }, {
                interest_name: 'Archaeology'
            }, {
                interest_name: 'Board Games'
            }, {
                interest_name: 'Church'
            }]
            return knex('interest').insert(interests);
        }));
};
