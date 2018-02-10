const db = require('../db')

const Post = {
  get: async (id) => {
    const posts = await db('posts').where({ id })
    return posts[0]
  },

  list: async () => {
    const posts = await db('posts').select()
    return posts
  }
}

// const f = async () => {
//   const p = await Post.list()
//   console.log(p)
// }
// f()

module.exports = Post
