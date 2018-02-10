const express = require('express')
const router = express.Router()

const User = require('../models/User')

//username, password
router.post('/login', async (req, res) => {
  const user = await User.auth(res.body.username, res.body.password)
})

// app.get('/users', async (req, res) => {
//   const users = await User.list()
//   res.json(users)
// })

module.exports = router