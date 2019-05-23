const express = require('express')
const router = express.Router()
const requireAuth = require('../middlewares/require-auth')

// User API
router.get('/details', (req, res) => {
  res.json(req.user)
})
router.get('/signout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
