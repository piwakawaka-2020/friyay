
exports.up = function(knex) {
  return knex.schema.createTable('wishes', (table) =>{
    table.increments('id').primary()
    table.string('name')
    table.string('wishes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('wishes')
};
