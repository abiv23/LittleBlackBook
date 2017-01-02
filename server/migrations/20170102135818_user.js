exports.up = function(knex, Promise) {
    return knex.schema.createTable('profile', (table) => {
        table.increments();
        table.text('email').unique().notNullable();
        table.text('password').notNullable();
        table.text('first_name').notNullable();
        table.text('last_name').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('profile');
};
