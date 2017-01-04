exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM suitor; ALTER SEQUENCE suitor_id_seq RESTART WITH 5')
        .then(() => {
            const suitors = [{
                profile_id: 1,
                name: 'Candi',
                age: '18',
                where_met: '7-11',
                rating: '8',
                id: 1,
                image_url: 'https: //postimg.org/image/r643tbya7/'
            }, {
                profile_id: 3,
                name: 'Douglas',
                age: '24',
                where_met: 'Grinder',
                rating: '8',
                id: 2,
                image_url: 'https: //postimg.org/image/r4u5zwwgf/'
            }, {
                profile_id: 3,
                name: 'Pete',
                age: '33',
                where_met: 'Broncos Game',
                rating: '7',
                id: 2,
                image_url: 'https: //postimg.org/image/t30txwoy7/'
            }, {
                profile_id: 4,
                name: 'Karen',
                age: '28',
                where_met: 'Brunch with Friends',
                rating: '10',
                id: 4,
                image_url: 'https: //postimg.org/image/ndfzzute7/'
            }]
            return knex('suitor').insert(suitors);
        });
};
