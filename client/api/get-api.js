import request from 'superagent' //http request to other places

const baseUrl = '/getdbzapi'  //route on server

export function getDragonBallDetails() {
  return request
    .get(baseUrl)
    .then(res => res.body)
}

