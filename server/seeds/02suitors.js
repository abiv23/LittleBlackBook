exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('suitor').del()
    knex.raw('TRUNCATE suitor RESTART IDENTITY CASCADE;')
        .then(() => {
            const suitors = [{
                profile_id: '1',
                name: 'Candi',
                age: '18',
                where_met: '7-11',
                rating: '8'
            }, {
                profile_id: '2',
                name: 'Douglas',
                age: '24',
                where_met: 'Grinder',
                rating: '8'
            }, {
                profile_id: '3',
                name: 'Pete',
                age: '33',
                where_met: 'Broncos Game',
                rating: '7'
            }, {
                profile_id: '4',
                name: 'Karen',
                age: '28',
                where_met: 'Brunch with Friends',
                rating: '10'
            }]
            return knex('suitor').insert(suitors);
        });
};
