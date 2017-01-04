exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM profile; ALTER SEQUENCE profile_id_seq RESTART WITH 5')
        .then(() => {
            const profiles = [{
                email: 'Joe.umm.Blow@hotmail.com',
                password: '$2a$10$uW56Nm2bl6d.PcZ5wnkcquP8ks6FXXvP6e1vnEHf0I42F8rPXnmce',
                /* we need to hash this before publishing*/
                first_name: 'Kyrie',
                last_name: 'James',
                id: 1,
                image_url: 'https: //postimg.org/image/qmz0k26vj/'
            }, {
                email: 'BlueHair@aol.com',
                password: '$2a$10$adkrS2aso75m8yhXFQxJi.j2O3OsvzBYX6GB6XemnG75DXPNcDytW',
                /* we need to hash this before publishing*/
                first_name: 'Mary Ann',
                last_name: 'Berbeth',
                id: 2,
                image_url: 'https: //postimg.org/image/dev1ddjyn/'
            }, {
                email: 'KickFlip@aol.com',
                password: '$2a$10$wJTK265xTTsgT4EnU3QwY.z8VP6xjLKSAGxjoCDq32bjl9nzbP/SS',
                /* we need to hash this before publishing*/
                first_name: 'Chris',
                last_name: 'Houdlette',
                id: 3,
                image_url: 'https: //postimg.org/image/vcoy8nxvz/'
            }, {
                email: 'scorchoNiN@aol.com',
                password: '$2a$10$GI0b3x4a/qdhCS94.swn6u/ai7jJZa1MU0v68fKA.GxWBc4PdlB1e',
                /* we need to hash this before publishing*/
                first_name: 'Kevin',
                last_name: 'Love',
                is_admin: true,
                id: 4,
                image_url: 'https: //postimg.org/image/c51tc2fkf/'
            }]
            return knex('profile').insert(profiles);
        });
};
