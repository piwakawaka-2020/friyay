exports.seed = function (knex, Promise){
    return knex('wishes').insert([
        {id:1, name:"Laniyuk", wishes:"endless supply of vegan fish sauce"},
        {id:2, name:"Kevin", wishes:"endless supply of soy sauce"}
        {id:3, name:"Nini", wishes:"endless supply of top cuisine S&S"}
    ])
}