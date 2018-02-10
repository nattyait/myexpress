const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const User = require('../models/User')

router.get('/posts', async (req, res) => {
  const posts = await Post.list()
  res.json(posts)
})

router.get('/posts/:id', async (req, res) => {
  const post = await Post.get(req.params.id)
  if (!post) {
    return res.sendStatus(404)
  }

  post.user = await User.get(post.userId)

  res.json(post)
})

//create post
router.post('/posts', async (req, res) => {
  const post = await Post.create(1, req.body.title, req.body.content)
  res.json(post)
})

module.exports = router