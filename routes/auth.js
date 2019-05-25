const express = require('express')
const router = express.Router()
const passport = require('passport')
const mongoose = require('mongoose')

const requireAuth = require('../middlewares/require-auth')
const createCurrentUser = require('../middlewares/create-current-user')

const User = mongoose.model('users')

// Google authentication routes
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/dashboard')
})
// Discord Authentication Routes
router.get(
  '/discord',
  requireAuth,
  passport.authenticate('discord', {
    session: false,
    scope: ['email', 'identify']
  })
)
router.get(
  '/discord/callback',
  createCurrentUser,
  passport.authenticate('discord', { session: false }),
  async (req, res, next) => {
    const { id, username, avatar } = req.user
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.currentUser._id },
      {
        discord: {
          id,
          username,
          avatar
        }
      },
      { new: true }
    )
    res.redirect('/dashboard')
  }
)

module.exports = router
