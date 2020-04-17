const express = require('express')
const request = require('superagent')
const server = express()

const wishes = require('./routes/wish.js')

server.use(express.json())
server.use(express.static('public'))
server.use(express.urlencoded({extended:false}))

server.use('/api/v1', wishes)


server.get('/getdbzapi', (req, res)  => {
    const baseUrl = 'http://dragon-ball-api.herokuapp.com/api/character'
    return request
        .get(baseUrl) //request to their api
        .then(gotapi => res.json(gotapi.body))  
          
})     
        


module.exports = server





