exports.up = function(knex, Promise) {
    return knex.schema.createTable('date', (table) => {
        table.increments();
        table.integer('suitor_id').unsigned().references('id').inTable('suitor').onDelete('cascade');
        table.integer('profile_id').unsigned().references('id').inTable('profile').onDelete('cascade');
        table.date('date');
        table.time('time');
        table.text('location');
        table.integer('rating');
<<<<<<< HEAD
        table.text('note');
=======
        table.text('note').defaultTo('');
>>>>>>> date-review
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('date');
};
