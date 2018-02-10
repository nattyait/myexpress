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

app.get('/posts/:id', async (req, res) => {
  const post = await Post.get(req.params.id)
  if (!post) {
    return res.sendStatus(404)
  }
  res.json(post)
})

app.listen(3000, () => {
  console.log('started')
})