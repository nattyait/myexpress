const express = require('express')
const router = express.Router()

const User = require('../models/User')

//username, password
router.post('/login', async (req, res) => {
  const token = await User.auth(req.body.username, req.body.password)

  if(!token){
    return res.sendStatus(401)
  }
  res.send(token)
})

// app.get('/users', async (req, res) => {
//   const users = await User.list()
//   res.json(users)
// })

module.exports = router