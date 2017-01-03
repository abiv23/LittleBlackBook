exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM profile; ALTER SEQUENCE profile_id_seq RESTART WITH 5')
        .then(() => {
            const profiles = [{
                email: 'Joe.umm.Blow@hotmail.com',
                password: '1234',
                /* we need to hash this before publishing*/
                first_name: 'Joe',
                last_name: 'Blow',
                id: 1
            }, {
                email: 'BlueHair@aol.com',
                password: '1234',
                /* we need to hash this before publishing*/
                first_name: 'Mary Ann',
                last_name: 'Berbeth',
                id: 2
            }, {
                email: 'HotToChat@aol.com',
                password: '1234',
                /* we need to hash this before publishing*/
                first_name: 'Chris',
                last_name: 'Houdlette',
                id: 3
            }, {
                email: 'scorchoNiN@aol.com',
                password: '1234',
                /* we need to hash this before publishing*/
                first_name: 'Tyler',
                last_name: 'In MiddleSchool',
                is_admin: true,
                id: 4
            }]
            return knex('profile').insert(profiles);
        });
};
