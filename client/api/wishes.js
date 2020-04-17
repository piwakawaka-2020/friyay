//superagent
import request from 'superagent'
//export const url
export const wishesUrl = '/api/v1'

export function getWishes(){
    return request.get(wishesUrl)
        .then(res => res.body)
}

export function addWishes(wishes) {
    return request.post(wishesUrl)
    .send(wishes)
    .then(res => res.body);
  }