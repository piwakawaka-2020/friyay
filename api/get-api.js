import request from 'superagent'


const baseUrl = 'http://dragon-ball-api.herokuapp.com/api/character'


export function getDragonBallDetails() {
  return request
    // .set('Authorization', 'Bearer ' + key) // If you need an auth header use .set
    .get(baseUrl)
    .then(res => res.body)
}