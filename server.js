const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const postsRoute = require('./routes/posts')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/', postsRoute)

// app.get('/users', async (req, res) => {
//   const users = await User.list()
//   res.json(users)
// })
app.listen(3000, () => {
  console.log('started')
})