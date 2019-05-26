const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  discord: {
    id: String,
    username: String,
    avatar: String,
    discriminator: String
  }
})

module.exports = mongoose.model('users', userSchema)
