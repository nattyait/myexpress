const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const postsRoute = require('./routes/posts')
const usersRoute = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/', postsRoute)
app.use('/users', usersRoute)
app.listen(3000, () => {
  console.log('started')
})