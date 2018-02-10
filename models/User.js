const _ = require('lodash')

const db = require('../db')

const User = {
  get: async (id) => {
    const users = await db('users').where({ id })
    const user = users[0]

    return _.omit(user, 'password')
  },
}

// const f = async () => {
//   const p = await Post.list()
//   console.log(p)
// }
// f()

module.exports = User
