exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_interest', (table) => {
        table.increments();
        table.integer('profile_id').unsigned().references('id').inTable('profile').onDelete('cascade');
        table.integer('interest_id').unsigned().references('id').inTable('interest').onDelete('cascade');
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_interest');
};
