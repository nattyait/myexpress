const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const User = require('./models/User')

const postsRoute = require('./routes/posts')
const usersRoute = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const authMiddleware = async (req, res, next) => {
  const token = req.query.token || req.headers.authorization
  if (token) {
    const user = await User.getByToken(req.query.token)
    if(!user){
      return res.sendStatus(401)
    }
    req.user = user
  }
  next()
}

//can accept every request method (but depends on method provided by each route)
app.use(authMiddleware)

app.use('/', postsRoute)
app.use('/users', usersRoute)
app.listen(3000, () => {
  console.log('started')
})