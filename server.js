const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const Post = require('./models/Post')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/posts', async (req, res) => {
  const posts = await Post.list()
  res.json(posts)
})

app.listen(3000, () => {
  console.log('started')
})