const express = require('express')
const router = express.Router()
const passport = require('passport')

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

module.exports = router
