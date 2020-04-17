const express = require('express')
const request = require('superagent')
const server = express()

server.use(express.json())
server.use(express.static('public'))


server.get('/getdbzapi', (req, res)  => {
    const baseUrl = 'http://dragon-ball-api.herokuapp.com/api/character'
    return request
        .get(baseUrl) //request to their api
        .then(gotapi => res.json(gotapi.body))  
          
})     
        
//route called /dragonball api this exists on my server goes to DGB pulls info back
//client api.js file change request to this route instead of dragon ball route 

module.exports = server





