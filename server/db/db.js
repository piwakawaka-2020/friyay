const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getWishes,
    saveWishes
}

function getWishes (db = connection) {
    return db('wishes')
    .select()
}

function saveWishes(wish, db = connection) {
    return db('wishes')
      .insert({
        name: wish.name,
        wishes: wish.wish
    })
  }