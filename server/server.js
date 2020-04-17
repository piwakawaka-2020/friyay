const express = require('express')

const server = express()

const wishes = require('./routes/wish.js')

server.use(express.json())
server.use(express.static('public'))
server.use(express.urlencoded({extended:false}))

server.use('/api/v1', wishes)

module.exports = server
