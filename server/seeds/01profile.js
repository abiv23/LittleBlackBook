exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('profile').del()
        .then(() => {
            const profiles = [{
                email: 'Joe.umm.Blow@hotmail.com',
                password: '1234',
                /* we need to hash this before publishing*/
                first_name: 'Joe',
                last_name: 'Blow'
            }, {
                email: 'BlueHair@aol.com',
                password: '1234',
                /* we need to hash this before publishing*/
                first_name: 'Mary Ann',
                last_name: 'Berbeth'
            }, {
                email: 'HotToChat@aol.com',
                password: '1234',
                /* we need to hash this before publishing*/
                first_name: 'Chris',
                last_name: 'Houdlette'
            }]
            return knex('profile').insert(profiles);
        });
};
