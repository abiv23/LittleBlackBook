exports.up = function(knex, Promise) {
    return knex.schema.createTable('interest', (table) => {
        table.increments();
        table.text('interest_name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('interest')
};
