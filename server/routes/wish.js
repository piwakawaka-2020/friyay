const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  console.log('here')
    db.getWishes()
      .then(wishes => {
        console.log(wishes)
        res.json(wishes)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  })
  
  router.post('/', (req, res) => {
    const wish = req.body
  
    db.saveWishes(wish)
      .then(wishes => {
        res.json(wishes)
      })
      .catch(err => {
        res.status(404).send(err.message)
      })
  })


module.exports = router