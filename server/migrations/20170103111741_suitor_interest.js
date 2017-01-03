exports.up = function(knex, Promise) {
    return knex.schema.createTable('suitor_interest', (table) => {
        table.increments();
        table.integer('suitor_id').unsigned().references('id').inTable('suitor').onDelete('cascade');
        table.integer('interest_id').unsigned().references('id').inTable('interest').onDelete('cascade');
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('suitor_interest');
};
