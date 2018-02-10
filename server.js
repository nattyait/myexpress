const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const Post = require('./models/Post')
const User = require('./models/User')

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

  post.user = await User.get(post.userId)

  res.json(post)
})

app.get('/users', async (req, res) => {
  const users = await User.list()
  res.json(users)
})

//create post
app.post('/posts', async (req, res) => {
  const post = await Post.create(1, req.body.title, req.body.content)
  res.json(post)
})

app.listen(3000, () => {
  console.log('started')
})